import Image from "next/image";
import ModalTrigger from "../modal-trigger";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col lg:pt-24 font-montserrat">

      {/* Imagem de fundo — apenas desktop */}
      <div className="absolute inset-0 z-0 hidden sm:block">
        <Image src="/portobelo.webp" alt="" width={1920} height={1080} className="absolute top-0 right-0 h-full w-auto" priority />
        <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(to right, #000000 30%, rgba(0,0,0,0.6) 55%, rgba(0,0,0,0.1) 75%, transparent 100%)" }} />
      </div>

      {/* Mensagem topo */}
      <div className="text-white py-2 px-4 text-center fixed top-0 left-0 right-0 z-50" style={{ background: "#000000" }}>
        <p className="gradient-text font-semibold text-xs lg:text-sm leading-snug">
          O treinamento de investimento na etapa mais lucrativa do mercado imobiliário, que vai te ensinar como dobrar seu patrimônio nos próximos 3 anos.
        </p>
      </div>

      {/* Imagem acima do conteúdo — apenas mobile */}
      <div className="block lg:hidden w-full relative z-10">
        <Image src="/portobelo.webp" alt="" width={800} height={450} className="w-full h-72 object-cover object-top" priority />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-1 items-center max-w-7xl mx-auto px-8 py-10 sm:py-20 w-full -mt-12">
        <div className="w-full max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
          <span className="inline-block border border-zinc-900 rounded-full text-white/20 text-xs uppercase px-4 py-1 lg:mb-6 font-semibold">
            Imersão Online Exclusiva | Vagas Limitadas
          </span>
          <h1 className="text-white font-montserrat text-6xl sm:text-8xl font-bold leading-tight mb-2 flex flex-col items-center lg:items-start">
            <span>IMERSÃO</span>
            <Image src="/ARI.webp" alt="ARI" width={320} height={120} className="max-h-24 sm:max-h-32 w-auto" priority />
          </h1>
          <div className="text-gray-300 text-sm hidden lg:block leading-relaxed mb-8 mt-6 space-y-3">
            <p>Existe um caminho muito inteligente e lucrativo que os grandes investidores usam e muitos nem sabem que existe: investir em um empreendimento antes mesmo da obra iniciar (na fase de incorporação).</p>
            <p>Na Imersão ARI, o Fabhricio ARI vai mostrar, passo a passo, como começar a investir no mercado imobiliário do litoral de Santa Catarina, a região que mais valoriza no Brasil.</p>
            <p>Será um treinamento online para você aprender o método para obter retornos de até 3% ao mês, totalmente livres de Imposto de Renda.</p>
            <p>É a oportunidade perfeita para você aprender a dobrar o seu capital em 3 anos, com a segurança de um imóvel de verdade e iniciando com investimentos de R$ 50 mil.</p>
          </div>
          <p className="gradient-text lg:block hidden text-xs mb-4">
            26, 27 e 28 de maio às 20h &nbsp;·&nbsp; 100% online e ao vivo &nbsp;·&nbsp; R$ 89,00
          </p>
          <ModalTrigger className="button-sun font-bold uppercase tracking-widest px-10 py-4 text-sm inline-block">
            GARANTIR MINHA VAGA
          </ModalTrigger>
        </div>
      </div>

    </section>
  );
}
