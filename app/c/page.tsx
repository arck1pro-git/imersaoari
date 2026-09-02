import type { Metadata } from "next";
import { LpBackground } from "../components/lps/shell";
import { LpHero, LpTexto } from "../components/lps/sections";
import LpLeadModal from "../components/lps/lead-modal";
import LpClarity from "../components/lps/clarity";
import LpPixel from "../components/lps/pixel";

export const metadata: Metadata = {
  title: "Novo acesso | ARI — Ativo de Renda Imobiliária",
  description:
    "Participe diretamente de um empreendimento em incorporação a partir de R$ 50 mil, sem comprar uma unidade inteira e sem inquilino, manutenção ou vacância.",
  icons: { icon: "/icon.png" },
};

export default function PageC() {
  return (
    <>
      <LpBackground />

      <main className="relative text-white">
        <LpHero
          titulo={
            <>
              Você não precisa comprar um imóvel inteiro para participar do que ele gera.{" "}
              <span className="lp-accent-text">
                Existe uma forma de entrar direto na fase onde o valor é criado.
              </span>
            </>
          }
          ctaLabel="Ver os empreendimentos"
        />

        <LpTexto
          paragrafos={[
            <>
              Quem já investe em imóveis sabe: comprar um imóvel pronto é comprar o resultado de um trabalho
              que outra pessoa já fez. A{" "}
              <span className="lp-accent-text">margem real ficou na incorporação</span>, na fase que você
              nunca teve acesso.
            </>,
            <>
              O ARI abre essa porta. Com aportes a partir de R$50 mil, você participa diretamente de um
              empreendimento em incorporação, sem precisar comprar uma unidade inteira, sem lidar com
              inquilino, manutenção ou vacância.
            </>,
            <>
              É o mesmo mercado que você já confia, só que na fase onde o dinheiro de verdade é feito.
            </>,
          ]}
          bullets={[
            "Aportes a partir de R$50 mil",
            "Participação direta em um empreendimento em incorporação",
            "Sem precisar comprar uma unidade inteira",
            "Sem lidar com inquilino, manutenção ou vacância",
            "O mesmo mercado que você já confia, na fase onde o valor é criado",
          ]}
          fecho="Descubra como transformar parte do seu capital em participação direta num empreendimento real."
          ctaLabel="Falar com um especialista"
        />
      </main>

      <LpLeadModal origem="lp-c-acesso" />
      <LpClarity lp="lp-c-acesso" />
      <LpPixel />
    </>
  );
}
