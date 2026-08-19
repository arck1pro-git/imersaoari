import Script from "next/script";

/** ID do projeto no Microsoft Clarity (Settings → Setup). */
const PROJECT_ID = "y4byw6cs2b";

type ClarityFn = ((...args: unknown[]) => void) & { q?: unknown[][] };

declare global {
  interface Window {
    clarity?: ClarityFn;
  }
}

/**
 * O snippet roda com `afterInteractive`, então um efeito de montagem pode chamar o
 * Clarity antes dele existir. Recriamos aqui a mesma fila `clarity.q` do snippet
 * oficial: o tag drena essas chamadas quando carrega, em vez de perdê-las.
 */
function clarity(...args: unknown[]) {
  if (typeof window === "undefined") return;
  if (!window.clarity) {
    const fila: ClarityFn = (...pendentes: unknown[]) => {
      (fila.q = fila.q ?? []).push(pendentes);
    };
    window.clarity = fila;
  }
  window.clarity(...args);
}

/** Tag customizada: vira filtro/segmento para recortar heatmaps e gravações. */
export function claritySet(chave: string, valor: string) {
  clarity("set", chave, valor);
}

/** Evento customizado: aparece junto dos smart events em Filtros e Dashboard. */
export function clarityEvent(nome: string) {
  clarity("event", nome);
}

/** Prioriza a gravação desta sessão quando o projeto passa do limite diário. */
export function clarityUpgrade(motivo: string) {
  clarity("upgrade", motivo);
}

/**
 * Tag do Clarity das LPs (/a, /b, /c e /d) — habilita heatmaps de clique, rolagem,
 * área e atenção. Marca a sessão com a tag `lp` para filtrar um heatmap por LP.
 */
export default function LpClarity({ lp }: { lp: string }) {
  const tag = JSON.stringify(lp);

  return (
    <Script
      id="ms-clarity"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${PROJECT_ID}");window.clarity("set","lp",${tag});`,
      }}
    />
  );
}
