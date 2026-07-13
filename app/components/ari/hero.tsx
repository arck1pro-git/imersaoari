import Image from "next/image";
import { Calendar, Monitor, Gift } from "lucide-react";
import RegistrarBtn from "./registrar-btn";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col lg:pt-24 font-inter">

      {/* Imagem de fundo - apenas desktop */}
      <div className="absolute inset-0 z-0 hidden sm:block">
        <Image src="/pilar2.webp" alt="" width={1920} height={1080} className="absolute top-0 right-0 h-full w-auto" priority />
        <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(to right, #000000 30%, rgba(0,0,0,0.6) 55%, rgba(0,0,0,0.1) 75%, transparent 100%)" }} />
      </div>

      {/* Countdown */}
      <div id="countdown-container" className="text-white py-0.5 px-4 font-bold text-xs tracking-widest uppercase fixed top-0 left-0 right-0 z-50" style={{ background: "#000000" }}>
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-1">
          <div className="lg:text-base flex items-center justify-center gap-4">
            <div className="p-0.5 text-center">
              <div className="font-bold"><span id="countdown-days" className="text-red-500">00</span> DIAS</div>
            </div>
            <div className="p-0.5 text-center">
              <span className="text-red-500 font-bold" id="countdown-hours">00</span> H
            </div>
            <div className="p-0.5 text-center">
              <span className="text-red-500 font-bold" id="countdown-minutes">00</span> MIN
            </div>
            <div className="p-0.5 text-center">
              <span className="text-red-500 font-bold" id="countdown-seconds">00</span> SEG
            </div>
          </div>
        </div>
      </div>

      {/* Imagem acima do conteúdo - apenas mobile */}
      <div className="block lg:hidden w-full relative z-10">
        <Image src="/pilar2.webp" alt="" width={800} height={450} className="w-full h-72 object-cover object-top" priority />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-1 items-center max-w-7xl mx-auto px-8 py-10 sm:py-20 w-full -mt-12">
        <div className="w-full max-w-2xl lg:max-w-3xl text-center lg:text-left mx-auto lg:mx-0">

          <h1 className="gradient-text font-carlasans text-5xl lg:text-7xl leading-[1.05] mb-5">
            SUPER LIVE ARI
          </h1>

          <p className="text-white text-xl lg:text-3xl font-manrope leading-tight mb-5">
            Conquiste retornos de até <span className="gradient-text">36% ao ano</span>, livres de imposto de renda.
          </p>

          <p className="hidden lg:block text-gray-300 text-base lg:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
            Aprenda a investir no litoral de Santa Catarina. Online, ao vivo e 100% gratuito.
          </p>

          <div className="hidden lg:flex flex-wrap justify-center lg:justify-start gap-2.5 mb-9">
            <span className="glass-chip rounded-full px-4 py-2 text-sm text-gray-200 flex items-center gap-2">
              <Calendar className="w-4 h-4" style={{ color: "#ecce83" }} /> 23 de julho · 19h30
            </span>
            <span className="glass-chip rounded-full px-4 py-2 text-sm text-gray-200 flex items-center gap-2">
              <Monitor className="w-4 h-4" style={{ color: "#ecce83" }} /> Online e ao vivo
            </span>
            <span className="glass-chip rounded-full px-4 py-2 text-sm text-gray-200 flex items-center gap-2">
              <Gift className="w-4 h-4" style={{ color: "#ecce83" }} /> 100% gratuito
            </span>
          </div>

          <RegistrarBtn className="mx-auto lg:mx-0" />
        </div>
      </div>

    </section>
  );
}
