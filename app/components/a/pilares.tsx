import { Brain, Target, ShieldCheck, TrendingUp } from "lucide-react";
import GarantirVagaBtn from "../garantir-vaga-btn";

const PILARES = [
  {
    icon: Brain,
    label: "Pilar 1: Mentalidade de Investidor",
    title: "Identifique onde você está e transite para o aporte inteligente.",
    body: "Aprenda a transicionar do operacional para o aporte inteligente, focado na multiplicação real do patrimônio.",
  },
  {
    icon: Target,
    label: "Pilar 2: Seleção de Oportunidades",
    title: "Como identificar a incorporação certa para investir?",
    body: "Critérios técnicos e embasados para filtrar empreendimentos viáveis de armadilhas.",
  },
  {
    icon: ShieldCheck,
    label: "Pilar 3: Segurança e Gestão de Patrimônio",
    title: "A arquitetura por trás da segurança jurídica e financeira.",
    body: "Saiba como utilizar SPEs, SCP e garantias reais para assegurar que o patrimônio investido esteja sempre protegido e rentável.",
  },
  {
    icon: TrendingUp,
    label: "Pilar 4: Ciclo de Saída e Realização de Lucro",
    title: "Como otimizar a saída do ativo e capturar a máxima valorização?",
    body: "Entenda como garantir que o retorno sobre o capital (ROE) seja realizado com eficiência, atingindo 100% de retorno em 3 anos.",
  },
];

export default function Pilares() {
  return (
    <section className="text-white py-12 font-montserrat">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-montserrat font-bold mb-3">
            <span className="gradient-text">Nos 3 dias vamos nos aprofundar nos 4 pilares para um investimento de sucesso.</span>
          </h2>
          <p className="text-gray-400 text-base">
            Esses são os mesmos 4 pilares que eu uso nos meus próprios investimentos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PILARES.map((pilar, i) => {
            const Icon = pilar.icon;
            return (
              <div
                key={i}
                style={{ padding: "1.5px", background: "linear-gradient(135deg, #c4a540 0%, #ecce83 50%, #f5dfa8 100%)", borderRadius: "0.75rem" }}
              >
                <div className="bg-zinc-950 rounded-[10px] p-6 flex flex-col gap-4 h-full">
                  <Icon size={28} style={{ color: "#ecce83" }} />
                  <p className="gradient-text text-xs font-bold uppercase tracking-widest">{pilar.label}</p>
                  <p className="text-white font-semibold text-base leading-snug">{pilar.title}</p>
                  <p className="text-gray-400 text-base leading-relaxed">{pilar.body}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-10">
          <GarantirVagaBtn />
        </div>
      </div>
    </section>
  );
}
