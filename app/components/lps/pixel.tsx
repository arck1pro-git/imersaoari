import Script from "next/script";

/** ID do Pixel no Gerenciador de Eventos da Meta (Fontes de dados). */
const PIXEL_ID = "2102101857297540";

/** Registro local das conversões já enviadas, para o mesmo lead não virar dois `Lead`. */
const CHAVE_REGISTRO = "ari_lead_meta";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export type DadosLead = {
  nome: string;
  email: string;
  /** Como veio do formulário, com máscara; a normalização é feita aqui. */
  telefone: string;
  /** Qual LP gerou o lead — vira `content_name` no Gerenciador. */
  origem: string;
  capital: string;
  modalidade: string;
};

type Registro = Record<string, { eventId: string; em: string }>;

/**
 * Normalização que a Meta espera no advanced matching: minúsculas, sem acento e
 * sem espaço nas pontas. O pixel também normaliza antes de gerar o hash, mas
 * mandar já limpo evita que o mesmo usuário gere hashes diferentes.
 */
function texto(valor: string) {
  return valor
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

/** A Meta quer primeiro e último nome separados; o formulário pede nome completo. */
function separaNome(completo: string) {
  const partes = texto(completo)
    .replace(/[^a-z\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);

  return {
    fn: partes[0] ?? "",
    ln: partes.length > 1 ? partes[partes.length - 1] : "",
  };
}

/**
 * Telefone no formato que a Meta espera: só dígitos, com DDI, sem `+`.
 *
 * Normaliza só para o Pixel — o payload do SprintHub segue intocado. O DDI é
 * prefixado apenas quando ainda não veio digitado; sem essa checagem, quem
 * escreve o número já com o país produziria `5555...` e perderia o match.
 * O corte em 12 dígitos preserva o DDD 55 (Santa Maria), que senão seria
 * confundido com o código do país.
 */
function comDdi(telefone: string) {
  const digitos = telefone.replace(/\D/g, "");
  return digitos.startsWith("55") && digitos.length >= 12 ? digitos : "55" + digitos;
}

/**
 * Identidade estável do lead, derivada de e-mail + telefone. Serve de chave de
 * deduplicação e de `external_id`. É um hash simples (djb2) só para não deixar
 * e-mail em texto puro no `localStorage` — não é proteção criptográfica, e a
 * Meta gera o SHA-256 dela por cima de qualquer forma.
 */
function impressao(email: string, telefone: string) {
  const base = `${email}|${telefone}`;
  let hash = 5381;
  for (let i = 0; i < base.length; i++) hash = ((hash << 5) + hash + base.charCodeAt(i)) | 0;
  return "ari" + (hash >>> 0).toString(36);
}

function leRegistro(): Registro {
  try {
    return JSON.parse(localStorage.getItem(CHAVE_REGISTRO) ?? "{}") as Registro;
  } catch {
    /* modo privado, cota estourada ou JSON corrompido: trata como nunca enviado */
    return {};
  }
}

function gravaRegistro(registro: Registro) {
  try {
    localStorage.setItem(CHAVE_REGISTRO, JSON.stringify(registro));
  } catch {
    /* sem persistência: o pior caso é reenviar o Lead num próximo envio igual */
  }
}

/** ID único da conversão, reaproveitado se um dia existir envio pela Conversions API. */
function novoId() {
  try {
    return crypto.randomUUID();
  } catch {
    return `lead-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
  }
}

/**
 * Dispara o `Lead` — única conversão enviada pelas LPs.
 *
 * Só é chamada depois que o hook responde OK, nunca por clique, abertura de
 * modal ou carregamento de página. Além disso, guarda a identidade do lead no
 * `localStorage`: se a mesma pessoa reabrir o formulário e enviar de novo no
 * mesmo navegador, o segundo envio não vira uma segunda conversão.
 *
 * Junto vai o advanced matching. O pixel gera o SHA-256 dos dados pessoais no
 * próprio navegador, então nada sai daqui em texto puro; é o que permite à Meta
 * casar o lead com a conta que viu o anúncio. Chamar `init` de novo com o mesmo
 * ID apenas acrescenta os dados do usuário — não redispara o `PageView`.
 *
 * Não recriamos a fila do snippet como fazemos no Clarity: o código da Meta
 * começa com `if (f.fbq) return`, então um stub nosso definido antes dele
 * impediria o carregamento do `fbevents.js`.
 *
 * @returns o `event_id` enviado, ou `null` se o Lead foi suprimido por já existir.
 */
export function pixelLead(dados: DadosLead): string | null {
  if (typeof window === "undefined") return null;

  const fbq = window.fbq;
  if (!fbq) return null;

  const email = texto(dados.email);
  const telefone = comDdi(dados.telefone);
  const chave = impressao(email, telefone);

  const registro = leRegistro();
  if (registro[chave]) return null;

  const { fn, ln } = separaNome(dados.nome);
  const eventId = novoId();

  fbq("init", PIXEL_ID, {
    em: email,
    ph: telefone,
    fn,
    ln,
    country: "br",
    external_id: chave,
  });

  // Só parâmetros não sensíveis: dado pessoal em parâmetro de evento é proibido
  // pela política da Meta — ele tem que ir pelo canal com hash do `init` acima.
  fbq(
    "track",
    "Lead",
    {
      content_name: dados.origem,
      content_category: dados.modalidade,
      capital: dados.capital,
    },
    { eventID: eventId },
  );

  registro[chave] = { eventId, em: new Date().toISOString() };
  gravaRegistro(registro);

  return eventId;
}

/**
 * Pixel da Meta das LPs (/a, /b, /c e /d). O snippet base faz `init` + `PageView`;
 * o `Lead` sai só de `pixelLead()`, depois do envio do formulário com sucesso.
 * São os dois únicos eventos — nenhum outro é disparado pelo código.
 */
export default function LpPixel() {
  return (
    <>
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${PIXEL_ID}');fbq('track','PageView');`,
        }}
      />
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          alt=""
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
