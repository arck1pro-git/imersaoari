export default function Bonus() {
    return (
<section className=" text-white py-24 px-6">
  <div className="max-w-3xl mx-auto text-center mb-12">
    <p className="gradient-text font-bold uppercase tracking-widest text-sm mb-2">🔥 Bônus Exclusivo — Checklist de Due Diligence</p>
    <h2 className="text-2xl font-bold mb-6">
      Planilha com 47 pontos de análise em incorporações
    </h2>
    <p className="text-gray-400 text-sm mb-4">Este material sozinho vale mais que o preço da inscrição na Imersão.</p>
    <p className="text-gray-300 text-sm leading-relaxed mb-4">
      Eu criei um checklist completo com 47 pontos de verificação para analisar a viabilidade de qualquer incorporação imobiliária. É o mesmo checklist que uso nas minhas próprias análises de investimento.
    </p>
    <p className="text-gray-300 text-sm leading-relaxed">
      Com essa ferramenta, você nunca mais vai entrar em um empreendimento sem ter analisado todos os aspectos técnicos, jurídicos e financeiros. Tudo documentado e pronto para usar.
    </p>
  </div>

  <div className="bg-red-600 text-white text-xs font-bold uppercase tracking-widest py-2 overflow-hidden whitespace-nowrap mb-10">
    <span className="inline-block animate-pulse">📊 CHECKLIST DUE DILIGENCE &nbsp;&nbsp; 📊 CHECKLIST DUE DILIGENCE &nbsp;&nbsp; 📊 CHECKLIST DUE DILIGENCE &nbsp;&nbsp; 📊 CHECKLIST DUE DILIGENCE</span>
  </div>

  <div className="max-w-3xl mx-auto bg-gray-900 rounded-sm border border-gray-800 grid md:grid-cols-2 gap-0 overflow-hidden">
    <div className="bg-gray-800 flex flex-col items-center justify-center p-10 gap-4">
      <p className="font-bold text-sm tracking-widest uppercase text-white">47 Pontos de Análise</p>
      <div className="w-36 h-36 rounded-sm bg-gray-700 flex items-center justify-center border border-yellow-800">
        <span className="text-yellow-700 text-xs">Planilha Técnica</span>
      </div>
    </div>

    <div className="p-8 flex flex-col justify-center gap-4">
      <ul className="space-y-3 text-sm text-gray-300">
        <li className="flex items-start gap-2"><span className="text-green-400 font-bold mt-0.5">✓</span> Análise técnica completa de viabilidade</li>
        <li className="flex items-start gap-2"><span className="text-green-400 font-bold mt-0.5">✓</span> Verificação jurídica e documentação</li>
        <li className="flex items-start gap-2"><span className="text-green-400 font-bold mt-0.5">✓</span> Análise financeira e fluxo de caixa</li>
        <li className="flex items-start gap-2"><span className="text-green-400 font-bold mt-0.5">✓</span> Estrutura de risco e estratégia de saída</li>
      </ul>
      <p className="text-gray-400 text-xs mt-4">O mesmo checklist usado nas minhas análises de investimento.</p>
    </div>
  </div>
</section>
)
}