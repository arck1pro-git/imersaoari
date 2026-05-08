import ModalTrigger from "./modal-trigger";
import { Check, Gift, Lock } from "lucide-react";

export default function Precocard() {

    return (
<section className="py-24 px-6">
  <div className="max-w-lg mx-auto">
    <div
      style={{ padding: "1.5px", background: "linear-gradient(135deg, #c4a540 0%, #ecce83 50%, #f5dfa8 100%)", borderRadius: "1.5rem" }}
    >
      <div className="bg-zinc-950 p-10 text-center" style={{ borderRadius: "calc(1.5rem - 1.5px)" }}>
        <p className="gradient-text font-bold text-sm uppercase tracking-widest mb-8">
          O MELHOR INVESTIMENTO É INVESTIR EM CONHECIMENTO.
        </p>

        <p className="text-white font-bold text-sm uppercase tracking-widest mb-4">O que você recebe ao se inscrever:</p>
        <ul className="text-gray-300 text-sm space-y-3 mb-8 text-left">
          <li className="flex items-start gap-2"><Check size={16} className="gradient-text flex-shrink-0 mt-0.5" style={{ color: "#ecce83" }} /> 3 noites de conteúdo técnico ao vivo.</li>
          <li className="flex items-start gap-2"><Check size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#ecce83" }} /> Acesso aos 4 Pilares da Estratégia ARI.</li>
          <li className="flex items-start gap-2"><Check size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#ecce83" }} /> Planilha de análise de investimento em empreendimentos.</li>
          <li className="flex items-start gap-2"><Check size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#ecce83" }} /> Q&A ao vivo no último dia.</li>
          <li className="flex items-start gap-2"><Gift size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#ecce83" }} /> BÔNUS: Checklist completo de due diligence em incorporações.</li>
        </ul>

        <p className="text-gray-400 text-sm leading-snug mb-6">
          Eu abro vagas assim raramente. Quando as vagas para esta turma esgotarem, o carrinho será fechado.
        </p>

        <ModalTrigger className="block button text-black font-bold uppercase tracking-widest px-8 py-4 text-sm">
          QUERO ME INSCREVER AGORA
        </ModalTrigger>

        <div className="flex justify-center gap-2 mt-6 opacity-40 flex-wrap">
          <span className="text-white text-xs">BOLETO</span>
          <span className="text-white text-xs">VISA</span>
          <span className="text-white text-xs">MASTERCARD</span>
          <span className="text-white text-xs">AMEX</span>
          <span className="text-white text-xs">PIX</span>
          <span className="text-white text-xs flex items-center gap-1"><Lock size={10} /> Compra Segura</span>
          <span className="text-white text-xs">Acesso Imediato para a comunidade</span>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}
