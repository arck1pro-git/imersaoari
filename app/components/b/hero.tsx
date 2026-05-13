import { Calendar, Monitor } from "lucide-react";
import GarantirVagaBtn from "./garantir-vaga-btn";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen font-poppins flex flex-col">

      {/* Countdown */}
      <div id="countdown-container" className="text-white py-1 px-4 font-bold text-xs tracking-widest uppercase fixed top-0 left-0 right-0 z-50" style={{ background: "#000000" }}>
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-0">
          <div className="lg:text-base flex items-center justify-center gap-4">
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

      {/* Imagem de fundo — apenas desktop */}
      <div
        className="absolute inset-0 bg-cover bg-center hidden lg:block"
        style={{ backgroundImage: "url('/herob.webp')" }}
      />

      {/* Gradiente preto da esquerda — apenas desktop */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/90 via-black/50 to-transparent hidden lg:block" />

      {/* Imagem acima do conteúdo — apenas mobile */}
      <div className="block lg:hidden w-full relative z-10 mt-8">
        <img src="/herob.webp" alt="" className="w-full h-72 object-cover object-top" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-black" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-20 w-full px-6 lg:px-64 py-10 lg:py-24 lg:pt-40 -mt-12 lg:mt-0 flex-1">
        <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">

          {/* Subtítulo de nicho */}
          <p className="gradient-text-blue hidden lg:block  tracking-[0.3em] text-xs font-semibold uppercase mb-3">
            Imersão exclusiva para investidores do mercado imobiliário
          </p>

          {/* Título principal */}
          <h1 className="text-white font-poppins text-5xl lg:text-7xl font-light leading-tight mb-2">
            Imersão<br />
            <span className="gradient-text-blue shine-text font-bold">ARI</span>
          </h1>

          {/* Subheadline */}
          <h2 className="text-xl lg:text-3xl font-poppins font-medium mb-4 leading-tight text-white">
            3 dias para dobrar seu patrimônio nos{" "}
            <span className="gradient-text-blue font-bold">próximos 3 anos</span>
          </h2>

          {/* Prova de resultado */}
          <p className="text-gray-400 mb-8 lg:block hidden leading-relaxed">
            O Método que fez um time de 12 arquitetos venderem 47 unidades em 8 meses — com rendimentos de até 3% ao mês, livres de IR, investindo em incorporação imobiliária no litoral de SC.
          </p>

          {/* De/Por + CTA */}
          <div className="space-y-3 mb-4">
            <p className="text-gray-500 text-xs">
              <span className="line-through mr-2">De R$ 297,00</span>
              <span className="gradient-text-blue font-bold text-base">por R$ 89,00</span>
            </p>
            <GarantirVagaBtn className="w-full" variant="blue" />
          </div>

          {/* Detalhes logísticos */}
          <div className="flex flex-col gap-1 text-sm text-gray-500 mt-4">
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> 26, 27 e 28 de maio às 20h</span>
            <span className="flex items-center gap-2"><Monitor className="w-4 h-4" /> Evento 100% Online e ao vivo</span>
          </div>

        </div>
      </div>

    </section>
  );
}
