import RegistrarBtn from "./registrar-btn";
import { Video, Wallet, TrendingUp, Calendar, Monitor } from "lucide-react";

const ITENS = [
  { icon: Video, text: "Uma noite de conteúdo ao vivo sobre Ativos de Renda Imobiliária" },
  { icon: Wallet, text: "Estratégias para investir a partir de R$ 50 mil" },
  { icon: TrendingUp, text: "O caminho para até 36% ao ano, livre de imposto de renda" },
  { icon: Calendar, text: "23 de julho, às 19h30 (horário de Brasília)" },
  { icon: Monitor, text: "100% online e ao vivo" },
];

export default function Registro() {
  return (
    <section className="py-16 lg:py-24 px-6 font-inter">
      <div className="max-w-lg mx-auto">
        <div className="glass-card rounded-3xl p-8 lg:p-10 text-center" style={{ borderColor: "rgba(236,206,131,0.35)" }}>
          

          <p className="text-white text-3xl lg:text-4xl font-manrope leading-tight">Sua vaga é</p>
          <p className="gradient-text text-5xl lg:text-6xl font-manrope mb-8">100% GRATUITA</p>

          <ul className="text-gray-300 text-sm space-y-3 mb-8 text-left">
            {ITENS.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3">
                <span className="glass-chip w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-3.5 h-3.5" style={{ color: "#ecce83" }} />
                </span>
                <span className="leading-snug">{text}</span>
              </li>
            ))}
          </ul>

          <RegistrarBtn className="block mx-auto" />

          <p className="text-gray-500 text-xs leading-snug mt-5">
            Cadastre-se e tenha acesso ao link para a comunidade.
          </p>
        </div>
      </div>
    </section>
  );
}
