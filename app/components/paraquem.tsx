export default function Parequem() {

    return (
<section className="text-white py-24 px-6">
  <div className="max-w-3xl mx-auto space-y-8">

    <div className="bg-gray-900 rounded-sm p-8">
      <h3 className="text-xl font-bold text-center mb-6">É pra você se...</h3>
      <ul className="space-y-4">
        <li className="flex items-start gap-3 text-sm text-gray-200">
          <span className="bg-green-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5">✓</span>
          Você tem entre R$ 50 mil e R$ 500 mil para investir
        </li>
        <li className="flex items-start gap-3 text-sm text-gray-200">
          <span className="bg-green-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5">✓</span>
          Quer multiplicar seu capital em ativos reais (não especulação)
        </li>
        <li className="flex items-start gap-3 text-sm text-gray-200">
          <span className="bg-green-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5">✓</span>
          Está disposto a aprender e aplicar o método ARI
        </li>
        <li className="flex items-start gap-3 text-sm text-gray-200">
          <span className="bg-green-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5">✓</span>
          Entende que investimento requer comprometimento e análise técnica
        </li>
      </ul>
    </div>

    <div className="bg-gray-100 rounded-sm p-8">
      <h3 className="text-xl font-bold text-center text-black mb-6">Não é pra você se...</h3>
      <ul className="space-y-4">
        <li className="flex items-start gap-3 text-sm text-gray-800">
          <span className="text-red-500 text-lg flex-shrink-0 mt-0.5">✕</span>
          Você é curioso ou busca fórmulas mágicas
        </li>
        <li className="flex items-start gap-3 text-sm text-gray-800">
          <span className="text-red-500 text-lg flex-shrink-0 mt-0.5">✕</span>
          Não tem capital para investir ou quer investir menos de R$ 50 mil
        </li>
        <li className="flex items-start gap-3 text-sm text-gray-800">
          <span className="text-red-500 text-lg flex-shrink-0 mt-0.5">✕</span>
          Só quer ouvir sem aplicar o método
        </li>
      </ul>
    </div>

  </div>
</section>
    )
}