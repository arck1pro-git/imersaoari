import ModalTrigger from "./modal-trigger";

export default function Preco() {
    return (
<section className="text-white py-24 px-6 text-center">
  <div className="max-w-2xl mx-auto">
    <p className="text-gray-400 text-sm leading-relaxed mb-8">
      Este é o método que sustenta os investimentos dos nossos maiores cotistas. Pela primeira vez, você pode acessar esse conhecimento de forma estruturada e profissional.
    </p>

    <ModalTrigger className="inline-block button text-black font-bold uppercase tracking-widest px-12 py-4 text-sm mb-20">
      GARANTIR MINHA VAGA AGORA
    </ModalTrigger>

    <div className="mt-10">
      <p className="text-gray-400 text-base mb-4">Investimento na</p>
      
      <h2 className="text-4xl font-cormorant font-light text-white tracking-wide mb-1">
        IMERSÃO<br/><span className="gradient-text font-bold">ARI</span>
      </h2>
      <p className="gradient-text font-cormorant text-5xl font-bold mt-4">R$ 89,00</p>
      <p className="text-white font-semibold mt-6">ou 12x de R$ 7,42</p>
      <p className="gradient-text font-semibold">Vagas limitadas para garantir a qualidade do suporte e do Q&A.</p>
    </div>
  </div>
</section>
    )
}