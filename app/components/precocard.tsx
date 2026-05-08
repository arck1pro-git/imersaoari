import ModalTrigger from "./modal-trigger";

export default function Precocard() {

    return (
<section className="py-24 px-6">
  <div className="max-w-lg mx-auto">
    <div className="bg-gradient-to-b from-yellow-500 to-yellow-600 rounded-sm p-10 text-center shadow-2xl shadow-yellow-900/40">
      <p className="text-black text-sm mb-1">
        O MELHOR CUSTO-BENEFÍCIO PARA O SEU PATRIMÔNIO
      </p>
      <p className="text-black font-bold text-sm uppercase tracking-widest mb-8"></p>

      <p className="text-black font-bold text-sm uppercase tracking-widest mb-4">O que você recebe ao se inscrever:</p>
      <ul className="text-black text-sm space-y-2 mb-8 text-left">
        <li className="flex items-center gap-2"><span className="text-green-800 font-bold">✓</span> 3 noites de conteúdo técnico ao vivo.</li>
        <li className="flex items-center gap-2"><span className="text-green-800 font-bold">✓</span> Acesso aos 5 Pilares da Estratégia ARI.</li>
        <li className="flex items-center gap-2"><span className="text-green-800 font-bold">✓</span> Planilha de análise de viabilidade de empreendimentos.</li>
        <li className="flex items-center gap-2"><span className="text-green-800 font-bold">✓</span> Q&A ao vivo no último dia.</li>
        <li className="flex items-center gap-2"><span className="text-orange-700 font-bold">🎁</span> BÔNUS: Checklist completo de due diligence em incorporações.</li>
      </ul>

      <p className="text-black font-bold text-sm leading-snug mb-6">
        Eu abro vagas assim raramente. Quando as vagas para esta turma esgotarem, o carrinho será fechado.
      </p>

      <ModalTrigger className="block button text-black font-bold uppercase tracking-widest px-8 py-4 text-sm">
        QUERO ME INSCREVER AGORA
      </ModalTrigger>

      <div className="flex justify-center gap-2 mt-6 opacity-60 flex-wrap">
        <span className="text-black text-xs">BOLETO</span>
        <span className="text-black text-xs">VISA</span>
        <span className="text-black text-xs">MASTERCARD</span>
        <span className="text-black text-xs">AMEX</span>
        <span className="text-black text-xs">PIX</span>
        <span className="text-black text-xs">🔒 Compra Segura</span>
        <span className="text-black text-xs">Acesso Imediato</span>
        <span className="text-black text-xs">Plataforma de Alunos</span>
      </div>
    </div>
  </div>
</section>
    )
}