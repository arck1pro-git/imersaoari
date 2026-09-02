import Script from "next/script";

/** ID do Pixel no Gerenciador de Eventos da Meta (Fontes de dados). */
const PIXEL_ID = "2102101857297540";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Dispara o `Lead` — única conversão enviada pelas LPs.
 *
 * Diferente do Clarity, não recriamos aqui a fila do snippet: o código da Meta
 * começa com `if (f.fbq) return`, então um stub nosso definido antes dele
 * impediria o carregamento do `fbevents.js`. O guard abaixo é a alternativa
 * segura — e basta, porque o snippet roda logo após a hidratação, muito antes de
 * o usuário preencher e enviar o formulário. Enquanto o `fbevents.js` ainda
 * carrega, o próprio snippet enfileira a chamada em `fbq.queue`.
 */
export function pixelLead() {
  if (typeof window === "undefined") return;
  window.fbq?.("track", "Lead");
}

/**
 * Pixel da Meta das LPs (/a, /b, /c e /d). O snippet base faz `init` + `PageView`;
 * o `Lead` sai só de `pixelLead()`, depois do envio do formulário com sucesso.
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
