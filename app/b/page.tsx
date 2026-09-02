import type { Metadata } from "next";
import { LpBackground } from "../components/lps/shell";
import { LpHero, LpTexto } from "../components/lps/sections";
import LpLeadModal from "../components/lps/lead-modal";
import LpClarity from "../components/lps/clarity";
import LpPixel from "../components/lps/pixel";

export const metadata: Metadata = {
  title: "Segurança | ARI — Ativo de Renda Imobiliária",
  description:
    "Estrutura jurídica de participação (SCP) vinculada a um empreendimento real que você pode visitar, acompanhar e entender do início ao fim.",
  icons: { icon: "/icon.png" },
};

export default function PageB() {
  return (
    <>
      <LpBackground />

      <main className="relative text-white">
        <LpHero
          titulo={
            <>
              Proteger patrimônio não é guardar dinheiro parado.{" "}
              <span className="lp-accent-text">
                É colocar seu capital em uma estrutura que você entende, acompanha e controla.
              </span>
            </>
          }
          ctaLabel="Entender a estrutura"
        />

        <LpTexto
          paragrafos={[
            <>
              Quem já perdeu dinheiro em consórcio, fundo ou promessa de &ldquo;renda passiva&rdquo; sabe
              que o problema nunca foi o valor investido. Foi a{" "}
              <span className="lp-accent-text">falta de estrutura por trás da promessa</span>.
            </>,
            <>
              O ARI nasceu para resolver exatamente isso. É uma estrutura jurídica de participação (SCP),
              com camadas de proteção definidas, vinculada a um empreendimento real que você pode visitar,
              acompanhar e entender do início ao fim.
            </>,
            <>
              Diferente de produtos financeiros regulados pela CVM que escondem o risco em letras miúdas,
              aqui você sabe exatamente onde seu dinheiro está e como ele se movimenta.
            </>,
          ]}
          bullets={[
            "Estrutura jurídica de participação (SCP)",
            "Camadas de proteção definidas",
            "Vinculado a um empreendimento real que você pode visitar",
            "Acompanhamento do início ao fim",
            "Você sabe onde seu dinheiro está e como ele se movimenta",
          ]}
          fecho="Fale com quem pode te mostrar, número por número, como essa estrutura protege o seu patrimônio."
          ctaLabel="Falar com um especialista"
        />
      </main>

      <LpLeadModal origem="lp-b-seguranca" />
      <LpClarity lp="lp-b-seguranca" />
      <LpPixel />
    </>
  );
}
