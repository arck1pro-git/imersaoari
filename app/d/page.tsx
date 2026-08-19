import type { Metadata } from "next";
import { LpBackground } from "../components/lps/shell";
import { LpHero, LpTexto } from "../components/lps/sections";
import LpLeadModal from "../components/lps/lead-modal";
import LpClarity from "../components/lps/clarity";

export const metadata: Metadata = {
  title: "Diversificação | ARI — Ativo de Renda Imobiliária",
  description:
    "Exposição ao imobiliário sem repetir o erro de concentração: participe da estruturação de um empreendimento, com retorno mensurável e IR isento dentro do limite legal.",
  icons: { icon: "/icon.png" },
};

export default function PageD() {
  return (
    <>
      <LpBackground />

      <main className="relative text-white">
        <LpHero
          titulo={
            <>
              Concentração é risco, mesmo quando parece segurança.{" "}
              <span className="lp-accent-text">
                Diversifique para uma classe de ativo que você já entende, mas nunca acessou dessa forma.
              </span>
            </>
          }
          ctaLabel="Avaliar a diversificação"
        />

        <LpTexto
          paragrafos={[
            <>
              Patrimônio concentrado em um único imóvel, uma única empresa ou uma única classe de ativo
              financeiro cresce até o dia em que para de crescer. E nesse dia,{" "}
              <span className="lp-accent-text">não existe plano B</span>.
            </>,
            <>
              O ARI é uma alternativa real de diversificação dentro do setor imobiliário, mas fora do padrão
              que você já conhece. Em vez de mais um imóvel pronto no seu portfólio, você participa da
              estruturação de um empreendimento, com retorno mensurável, previsível e lucrativo, e IR isento
              sobre os rendimentos dentro do limite legal.
            </>,
            <>
              É uma forma de manter exposição ao imobiliário sem repetir o mesmo erro de concentração que
              você já está tentando corrigir.
            </>,
          ]}
          bullets={[
            "Diversificação dentro do imobiliário, fora do padrão que você já conhece",
            "Participação na estruturação do empreendimento",
            "Retorno mensurável, previsível e lucrativo",
            "IR isento sobre os rendimentos, dentro do limite legal",
            "Exposição ao imobiliário sem repetir o erro de concentração",
          ]}
          fecho="Vamos conversar sobre como encaixar o ARI na sua estratégia de diversificação."
          ctaLabel="Falar com um especialista"
        />
      </main>

      <LpLeadModal origem="lp-d-diversificacao" />
      <LpClarity lp="lp-d-diversificacao" />
    </>
  );
}
