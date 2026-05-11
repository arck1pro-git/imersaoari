import ModalTrigger from "./modal-trigger";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col lg:pt-24">

      {/* Imagem de fundo — apenas desktop */}
      <div className="absolute inset-0 z-0 hidden sm:block">
        <img src="/hero.png" alt="" className="absolute top-0 right-[-40px] h-full w-auto" />
        <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(to right, #000000 30%, rgba(0,0,0,0.6) 55%, rgba(0,0,0,0.1) 75%, transparent 100%)" }} />
      </div>

      {/* Countdown */}
      <div id="countdown-container" className="text-white py-1 px-4 font-bold text-sm tracking-widest uppercase fixed top-0 left-0 right-0 z-50" style={{ background: "#000000" }}>
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-1">
          <div className="lg:text-2xl flex items-center justify-center gap-4">
            <div className=" p-1 text-center">
              <div className=" font-bold"> <span id="countdown-days" className="text-red-500">00</span> DIAS</div>
            </div>
            <div className=" p-1 text-center">
              <span className="text-red-500 font-bold" id="countdown-hours">00</span> H
            </div>
            <div className=" p-1 text-center">
              <span className="text-red-500 font-bold" id="countdown-minutes">00</span> MIN
            </div>
            <div className=" p-1 text-center">
              <span className="text-red-500 font-bold" id="countdown-seconds">00</span> SEG
            </div>
          </div>
        </div>
      </div>

      {/* Imagem acima do conteúdo — apenas mobile */}
      <div className="block lg:hidden w-full relative z-10">
        <img src="/hero.png" alt="" className="w-full h-72 object-cover object-top" />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-1 items-center max-w-7xl mx-auto px-8 py-10 sm:py-20 w-full -mt-12">
        <div className="w-full max-w-xl text-center lg:text-left mx-auto lg:mx-0">
          <span className="inline-block border border-zinc-900 rounded-full text-white/20 text-xs uppercase px-4 py-1 lg:mb-6 font-semibold">
            Imersão Online Exclusiva | Vagas Limitadas
          </span>
          <h1 className="text-white font-cormorant text-6xl sm:text-8xl font-light leading-tight mb-2 ">
            IMERSÃO<br />
            <span className="gradient-text font-bold">ARI</span>
          </h1>
          <p className="gradient-text text-md lg:text-xl font-semibold leading-snug mb-4 mt-6">
            3 dias para você aprender como dobrar seu patrimônio nos próximos 3 anos.
          </p>
          <p className="text-gray-300 lg:block hidden text-sm leading-relaxed mb-8">
            Participe da Imersão ARI e descubra como multiplicar seu patrimônio no litoral de Santa Catarina com rendimentos de até 3% ao mês, livres de imposto de renda investindo em incorporação imobiliária. É a estratégia definitiva para quem busca dobrar seu capital com a segurança de ativos reais.
          </p>
          <p className="gradient-text lg:block hidden text-xs mb-4">
            26, 27 e 28 de maio às 20h &nbsp;·&nbsp; 100% online e ao vivo &nbsp;·&nbsp; R$ 89,00
          </p>
          <ModalTrigger className="button text-black font-bold uppercase tracking-widest px-10 py-4 text-sm inline-block">
            GARANTIR MINHA VAGA
          </ModalTrigger>
        </div>
      </div>

    </section>
  );
}
