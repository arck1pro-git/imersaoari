import { Wallet, Sprout, LayoutGrid } from "lucide-react";
import RegistrarBtn from "./registrar-btn";

const PERFIS = [
  {
    icon: Wallet,
    titulo: "Investidor com capital a partir de R$ 50 mil",
    texto: "Se você pensa que só é possível investir em imóveis com milhões, ou que os investimentos tradicionais não rendem bem, esta Super Live é para você. Vamos mostrar como entrar em um mercado de alto retorno com aporte inicial a partir de R$ 50 mil.",
  },
  {
    icon: Sprout,
    titulo: "Investidores iniciantes no setor imobiliário",
    texto: "Se você quer investir e alcançar seus objetivos financeiros, mas está receoso ou acredita que o mercado imobiliário é para poucos, vamos te guiar passo a passo até oportunidades lucrativas no Litoral Catarinense.",
  },
  {
    icon: LayoutGrid,
    titulo: "Investidores em busca de diversificação",
    texto: "Aprenda a diversificar seu portfólio no aquecido setor imobiliário do Litoral Catarinense. Invista a partir de R$ 50 mil e gere rendimentos sem precisar revender ou administrar imóveis.",
  },
];

export default function Parequem() {
  return (
    <section className="text-white py-16 lg:py-24 px-6 font-inter">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-5xl font-manrope tracking-tight leading-[1.1] mb-4">
            Para quem é a <span className="gradient-text">Super Live ARI?</span>
          </h2>
          <p className="text-gray-400 text-base lg:text-lg leading-relaxed">
            Se você se identifica com um destes perfis, este evento foi feito para você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PERFIS.map(({ icon: Icon, titulo, texto }) => (
            <div key={titulo} className="glass-card glass-card-hover cut-card p-7 flex flex-col gap-4">
              <div className="glass-chip w-12 h-12 rounded-xl flex items-center justify-center">
                <Icon className="w-5 h-5" style={{ color: "#ecce83" }} />
              </div>
              <p className="text-white font-manrope text-lg leading-snug">{titulo}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{texto}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <RegistrarBtn />
        </div>
      </div>
    </section>
  );
}
