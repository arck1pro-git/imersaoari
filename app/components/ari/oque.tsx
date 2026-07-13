import RegistrarBtn from "./registrar-btn";

export default function Oque() {
  return (
    <section className="text-white bg-zinc-950 py-12 px-6 font-inter">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="lg:text-6xl text-4xl font-manrope mb-8">
          O que é a <span className="gradient-text">Super Live ARI?</span>
        </h2>

        <div className="space-y-5 text-gray-300 text-base leading-relaxed">
          <p>
            Um evento educacional online, ao vivo e 100% gratuito sobre Ativos de Renda Imobiliária no Litoral Catarinense.
          </p>
          <p>
            Você vai descobrir as estratégias dos investimentos ARI (Ativos de Renda Imobiliária) para multiplicar seu patrimônio ou gerar rendimentos mensais em uma das regiões mais promissoras do Brasil.
          </p>
          <p>
            Não é venda de imóveis, nem curso milagroso. É o caminho real para transformar seu capital em investimentos de alta rentabilidade, a partir de R$ 50 mil.
          </p>
        </div>

        <div className="flex justify-center mt-10">
          <RegistrarBtn />
        </div>
      </div>
    </section>
  );
}
