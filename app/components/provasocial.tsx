import ModalTrigger from "./modal-trigger";

export default function Provasocial() {
    return (
<section className=" text-white py-24 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-3">
      Veja o retorno de <span className="gradient-text">investidores que aplicam o método ARI.</span>
    </h2>
    <p className="text-gray-400 text-sm mb-12">Não são números no papel. São incorporações reais, com capital real e retorno real.</p>

    <p className="text-sm uppercase tracking-widest font-bold text-gray-300 mb-8">VEJA OS CASES ▶</p>

    <div className="grid md:grid-cols-2 gap-6 mb-12">
      <div className="bg-gray-900 rounded-sm aspect-video flex flex-col items-end justify-end p-4 border border-gray-800">
        <div className="text-left w-full">
          <p className="font-bold text-sm">Ricardo Santos</p>
          <p className="text-gray-400 text-xs">Investidor em Incorporação — Santa Catarina</p>
          <p className="gradient-text font-bold text-sm">R$ 50k → R$ 100k em 36 meses</p>
        </div>
      </div>
      <div className="bg-gray-900 rounded-sm aspect-video flex flex-col items-end justify-end p-4 border border-gray-800">
        <div className="text-left w-full">
          <p className="font-bold text-sm">Paula Costa</p>
          <p className="text-gray-400 text-xs">Corretora de Imóveis — SC</p>
          <p className="gradient-text font-bold text-sm">Remuneração mensal de empreendimentos</p>
        </div>
      </div>
    </div>

    <ModalTrigger className="inline-block button text-black font-bold uppercase tracking-widest px-12 py-4 text-sm">
      QUERO GARANTIR MINHA VAGA
    </ModalTrigger>
  </div>
</section>
    )
}