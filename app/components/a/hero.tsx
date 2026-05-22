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

      {/* Countdown */}
      <div id="countdown-container" className="text-white py-1 px-4 font-bold text-sm tracking-widest uppercase fixed top-0 left-0 right-0 z-50" style={{ background: "#000000" }}>
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-1">
          <div className="lg:text-2xl flex items-center justify-center gap-4">
            <div className="p-1 text-center">
              <div className="font-bold"><span id="countdown-days" className="text-red-500">00</span> DIAS</div>
            </div>
            <div className="p-1 text-center">
              <span className="text-red-500 font-bold" id="countdown-hours">00</span> H
            </div>
            <div className="p-1 text-center">
              <span className="text-red-500 font-bold" id="countdown-minutes">00</span> MIN
            </div>
            <div className="p-1 text-center">
              <span className="text-red-500 font-bold" id="countdown-seconds">00</span> SEG
            </div>
          </div>
        </div>
      </div>

      {/* Imagem acima do conteúdo — apenas mobile */}
      <div className="block lg:hidden w-full relative z-10">
        <Image src="/portobelo.webp" alt="" width={800} height={450} className="w-full h-72 object-cover object-top" priority />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-1 items-center max-w-7xl mx-auto px-8 py-10 sm:py-20 w-full -mt-12">
        <div className="w-full max-w-2xl lg:max-w-3xl text-center lg:text-left mx-auto lg:mx-0">
         
          <h1 className="gradient-text font-carlasans text-4xl lg:text-6xl leading-tight mb-2">
            IMERSÃO ARI
          </h1>
          <ul className="text-gray-300 text-xs ding-relaxed mb-8 mt-6 space-y-2">
            {[
              "Dia 26, 27 e 28 de maio às 20h (Brasília).",
              "Ao vivo pelo Youtube — link exclusivo para inscritos.",
              "Gravação do treinamento para assistir a qualquer momento.",
              "Conteúdo técnico, prático e aplicável.",
              "Perguntas e Respostas ao vivo para tirar dúvidas.",
              "Materiais para análise de investimento em incorporação imobiliária.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 font-semibold">
                <span className="gradient-text mt-0.5 shrink-0">◆</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <ModalTrigger className="button-sun font-bold uppercase tracking-widest px-10 py-4 text-sm inline-block">
            GARANTIR MINHA VAGA
          </ModalTrigger>
        </div>
      </div>

    </section>
  );
}
