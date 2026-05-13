import { DollarSign, TrendingUp, Clock, X } from "lucide-react";

export default function Parequem() {
  return (
    <section className="py-16 lg:py-24 px-4 text-white font-poppins">
      <div className="max-w-4xl mx-auto relative border border-white/30 overflow-hidden p-8 lg:p-12 rounded-lg">
        {/* Luz azul canto superior direito */}
        <div
          className="absolute top-0 right-0 w-80 h-80 pointer-events-none z-0"
          style={{
            background: "radial-gradient(circle at top right, rgba(30,58,138,0.55) 0%, transparent 70%)",
          }}
        />
        {/* Luz azul canto inferior esquerdo */}
        <div
          className="absolute bottom-0 left-0 w-80 h-80 pointer-events-none z-0"
          style={{
            background: "radial-gradient(circle at bottom left, rgba(30,58,138,0.55) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10">
          <h2 className="text-2xl text-center lg:text-4xl font-bold mb-12">
            Essa imersão foi feita<br />para você que:
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-3 lg:p-6 rounded-lg hover-scale" style={{ background: "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.06) 0%, transparent 55%), #09090b", border: "1px solid rgba(255,255,255,0.12)" }}>
              <div className="mb-3 w-7 h-7 lg:w-10 lg:h-10 rounded-full border border-white/20 flex items-center justify-center" style={{ background: "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.18) 0%, transparent 65%)" }}>
                <DollarSign className="w-3 h-3 lg:w-5 lg:h-5" style={{ color: "var(--marquee-blue)" }} />
              </div>
              <p className="text-gray-300 text-xs lg:text-base">
                <span className="font-bold text-white">Tem entre R$ 50 mil e R$ 500 mil</span> para investir e quer colocar esse capital em ativos reais, não em especulação.
              </p>
            </div>

            <div className="p-3 lg:p-6 rounded-lg hover-scale" style={{ background: "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.06) 0%, transparent 55%), #09090b", border: "1px solid rgba(255,255,255,0.12)" }}>
              <div className="mb-3 w-7 h-7 lg:w-10 lg:h-10 rounded-full border border-white/20 flex items-center justify-center" style={{ background: "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.18) 0%, transparent 65%)" }}>
                <TrendingUp className="w-3 h-3 lg:w-5 lg:h-5" style={{ color: "var(--marquee-blue)" }} />
              </div>
              <p className="text-gray-300 text-xs lg:text-base">
                <span className="font-bold text-white">Quer multiplicar seu capital</span> com rendimentos consistentes investindo em incorporação imobiliária no litoral de SC.
              </p>
            </div>

            <div className="p-3 lg:p-6 rounded-lg hover-scale" style={{ background: "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.06) 0%, transparent 55%), #09090b", border: "1px solid rgba(255,255,255,0.12)" }}>
              <div className="mb-3 w-7 h-7 lg:w-10 lg:h-10 rounded-full border border-white/20 flex items-center justify-center" style={{ background: "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.18) 0%, transparent 65%)" }}>
                <Clock className="w-3 h-3 lg:w-5 lg:h-5" style={{ color: "var(--marquee-blue)" }} />
              </div>
              <p className="text-gray-300 text-xs lg:text-base">
                <span className="font-bold text-white">Está disposto a aprender e aplicar</span> o método ARI na prática, indo além da teoria.
              </p>
            </div>

            <div className="p-3 lg:p-6 rounded-lg hover-scale" style={{ background: "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.06) 0%, transparent 55%), #09090b", border: "1px solid rgba(255,255,255,0.12)" }}>
              <div className="mb-3 w-7 h-7 lg:w-10 lg:h-10 rounded-full border border-white/20 flex items-center justify-center" style={{ background: "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.18) 0%, transparent 65%)" }}>
                <X className="w-3 h-3 lg:w-5 lg:h-5" style={{ color: "var(--marquee-blue)" }} />
              </div>
              <p className="text-gray-300 text-xs lg:text-base">
                <span className="font-bold text-white">Entende que investimento sério</span> requer comprometimento e análise técnica — e está pronto para isso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
