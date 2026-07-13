import { KeyRound, TrendingUp, ShieldCheck, Settings2, CalendarRange, Coins } from "lucide-react";
import RegistrarBtn from "./registrar-btn";

const BENEFICIOS = [
  {
    icon: KeyRound,
    label: "Acessibilidade e alto retorno",
    body: "Acesso a investimentos de alto retorno a partir de apenas R$ 50 mil. Isso democratiza o mercado imobiliário, antes exclusivo para grandes investidores.",
  },
  {
    icon: TrendingUp,
    label: "Rentabilidade excepcional",
    body: "Até 36% de rentabilidade ao ano, livre de imposto de renda. Seu dinheiro não fica parado: ele trabalha para você, superando a inflação.",
  },
  {
    icon: ShieldCheck,
    label: "Mercado consolidado",
    body: "O Litoral Catarinense tem valorização imobiliária comprovada e contínua. Seus investimentos ficam ancorados em uma região de forte demanda.",
  },
  {
    icon: CalendarRange,
    label: "Planos flexíveis",
    body: "Escolha entre opções de 18, 24 ou 36 meses. Selecione o plano que melhor se alinha à sua estratégia e comece a construir um futuro mais sólido.",
  },
  {
    icon: Coins,
    label: "Rendimentos no seu tempo",
    body: "Receba pagamentos mensalmente, com fluxo de caixa contínuo, ou acumule o rendimento total ao final da operação. Você alinha o recebimento à sua necessidade.",
  },
];

export default function Porque() {
  return (
    <section className="relative text-white py-16 lg:py-24 font-inter">
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-5xl font-manrope tracking-tight leading-[1.1] mb-4">
            Por que investir em ARI no <span className="gradient-text">litoral catarinense?</span>
          </h2>
          <p className="text-gray-400 text-base lg:text-lg leading-relaxed">
            Uma das regiões que mais valorizam no Brasil, com acesso estruturado e gestão completa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BENEFICIOS.map((b, i) => {
            const Icon = b.icon;
            return (
              <div key={i} className="glass-card glass-card-hover cut-card p-7 flex flex-col gap-4 h-full">
                <div className="glass-chip w-12 h-12 rounded-xl flex items-center justify-center">
                  <Icon className="w-5 h-5" style={{ color: "#ecce83" }} />
                </div>
                <p className="text-white font-manrope text-lg leading-snug">{b.label}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{b.body}</p>
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
