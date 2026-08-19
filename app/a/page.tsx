import type { Metadata } from "next";
import { LpBackground } from "../components/lps/shell";
import { LpHero, LpTexto } from "../components/lps/sections";
import LpLeadModal from "../components/lps/lead-modal";
import LpClarity from "../components/lps/clarity";

export const metadata: Metadata = {
  title: "Rentabilidade | ARI — Ativo de Renda Imobiliária",
  description:
    "Entre na fase da incorporação, onde a margem é criada. Aportes a partir de R$ 50 mil, prazos de 18, 24 ou 36 meses.",
  icons: { icon: "/icon.png" },
};

export default function PageA() {
  return (
    <>
      <LpBackground />

      <main className="relative text-white">
        <LpHero
          titulo={
            <>
              Seu dinheiro parado rende menos do que deveria.{" "}
              <span className="lp-accent-text">
                O nosso é estruturado para render o que o mercado imobiliário realmente entrega.
              </span>
            </>
          }
          ctaLabel="Quero saber quanto rende"
        />

        <LpTexto
          paragrafos={[
            <>
              A maioria dos investidores compra um imóvel e espera a valorização acontecer sozinha. Isso não
              é rentabilidade, é sorte disfarçada de estratégia.
            </>,
            <>
              O ARI (Ativo de Renda Imobiliária) foi estruturado para funcionar diferente. Você entra na
              fase da incorporação,{" "}
              <span className="lp-accent-text">onde o resultado é criado, não apenas comprado</span>. É aqui
              que está a margem que a maioria nunca vê.
            </>,
            <>
              Com aportes a partir de R$50 mil e prazos de 18, 24 ou 36 meses, seu capital é direcionado
              para um empreendimento real, com retorno mensurável, previsível e lucrativo. Sem depender de
              banco, sem depender da sorte do mercado.
            </>,
          ]}
          bullets={[
            "Entrada na fase da incorporação, onde a margem é criada",
            "Aportes a partir de R$50 mil",
            "Prazos de 18, 24 ou 36 meses",
            "Capital direcionado para um empreendimento real",
            "Retorno mensurável, previsível e lucrativo",
          ]}
          fecho="Quer saber quanto o seu capital pode gerar em renda mensal?"
          ctaLabel="Falar com um especialista"
        />
      </main>

      <LpLeadModal origem="lp-a-rentabilidade" />
      <LpClarity lp="lp-a-rentabilidade" />
    </>
  );
}
