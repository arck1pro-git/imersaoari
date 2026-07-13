import { Compass, KeyRound, TrendingUp } from "lucide-react";
import RegistrarBtn from "./registrar-btn";

const TEMAS = [
  {
    icon: Compass,
    label: "Tema 1: Desmistificando o mercado",
    title: "O mercado de ARI no litoral catarinense, sem mistério.",
    body: "Entenda a fundo as oportunidades e os desafios reais dessa região, sem se sentir intimidado por termos técnicos ou burocracia. Conheça o panorama completo dos ARI e como eles se encaixam na sua carteira.",
  },
  {
    icon: KeyRound,
    label: "Tema 2: Acesso e investimento",
    title: "Estratégias para começar a investir em ARI.",
    body: "Descubra modelos de negócio inovadores para investir em incorporações no Litoral Catarinense a partir de R$ 50 mil, tendo acesso aos projetos mais promissores da região.",
  },
  {
    icon: TrendingUp,
    label: "Tema 3: Maximizando retornos",
    title: "Como alcançar até 36% ao ano, livre de IR.",
    body: "Aprenda a identificar oportunidades lucrativas e a proteger seu capital a longo prazo. Chega de ver seu dinheiro parado, perdendo valor para a inflação.",
  },
];

export default function Aprender() {
  return (
    <section className="text-white py-16 lg:py-24 px-6 font-inter">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-5xl font-manrope tracking-tight leading-[1.1] mb-4">
            O que você vai <span className="gradient-text">aprender</span>
          </h2>
          <p className="text-gray-400 text-base lg:text-lg leading-relaxed">
            Em uma noite, você desvenda o potencial do mercado imobiliário do Litoral Catarinense e aprende a transformar seu capital em investimentos de alta rentabilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TEMAS.map((tema, i) => {
            const Icon = tema.icon;
            return (
              <div key={i} className="glass-card glass-card-hover cut-card p-7 flex flex-col gap-4 h-full">
                <div className="glass-chip w-12 h-12 rounded-xl flex items-center justify-center">
                  <Icon className="w-5 h-5" style={{ color: "#ecce83" }} />
                </div>
                <span className="gradient-text text-xs font-manrope uppercase tracking-widest">{tema.label}</span>
                <p className="text-white font-manrope text-lg leading-snug">{tema.title}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{tema.body}</p>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-12">
          <RegistrarBtn />
        </div>
      </div>
    </section>
  );
}
