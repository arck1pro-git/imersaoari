import { CheckCircle, XCircle } from "lucide-react";

export default function Parequem() {

    return (
<section className="text-white py-10 px-6">
  <div className="max-w-4xl lg:max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

    <div className="bg-zinc-950 rounded-xl p-8 lg:p-14">
      <h3 className="text-xl lg:text-3xl font-bold text-center mb-6 lg:mb-10">É pra você se...</h3>
      <ul className="space-y-4 lg:space-y-6">
        <li className="flex items-start gap-3 text-sm lg:text-lg text-gray-200">
          <CheckCircle size={18} className="flex-shrink-0 mt-0.5 lg:mt-1 lg:w-6 lg:h-6" style={{ color: "#22c55e" }} />
          Você tem entre R$ 50 mil e R$ 500 mil para investir
        </li>
        <li className="flex items-start gap-3 text-sm lg:text-lg text-gray-200">
          <CheckCircle size={18} className="flex-shrink-0 mt-0.5 lg:mt-1 lg:w-6 lg:h-6" style={{ color: "#22c55e" }} />
          Quer multiplicar seu capital em ativos reais (não especulação)
        </li>
        <li className="flex items-start gap-3 text-sm lg:text-lg text-gray-200">
          <CheckCircle size={18} className="flex-shrink-0 mt-0.5 lg:mt-1 lg:w-6 lg:h-6" style={{ color: "#22c55e" }} />
          Está disposto a aprender e aplicar o método ARI
        </li>
        <li className="flex items-start gap-3 text-sm lg:text-lg text-gray-200">
          <CheckCircle size={18} className="flex-shrink-0 mt-0.5 lg:mt-1 lg:w-6 lg:h-6" style={{ color: "#22c55e" }} />
          Entende que investimento requer comprometimento e análise técnica
        </li>
      </ul>
    </div>

    <div className="bg-zinc-950 rounded-xl p-8 lg:p-14">
      <h3 className="text-xl lg:text-3xl font-bold text-center mb-6 lg:mb-10">Não é pra você se...</h3>
      <ul className="space-y-4 lg:space-y-6">
        <li className="flex items-start gap-3 text-sm lg:text-lg text-gray-200">
          <XCircle size={18} className="flex-shrink-0 mt-0.5 lg:mt-1 lg:w-6 lg:h-6" style={{ color: "#ef4444" }} />
          Você é curioso ou busca fórmulas mágicas
        </li>
        <li className="flex items-start gap-3 text-sm lg:text-lg text-gray-200">
          <XCircle size={18} className="flex-shrink-0 mt-0.5 lg:mt-1 lg:w-6 lg:h-6" style={{ color: "#ef4444" }} />
          Não tem capital para investir ou quer investir menos de R$ 50 mil
        </li>
        <li className="flex items-start gap-3 text-sm lg:text-lg text-gray-200">
          <XCircle size={18} className="flex-shrink-0 mt-0.5 lg:mt-1 lg:w-6 lg:h-6" style={{ color: "#ef4444" }} />
          Só quer ouvir sem aplicar o método
        </li>
      </ul>
    </div>

  </div>
</section>
    )
}
