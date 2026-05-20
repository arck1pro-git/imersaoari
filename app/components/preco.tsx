import GarantirVagaBtn from "./garantir-vaga-btn"
export default function Preco() {
    return (
<section className="text-white py-12 px-6 text-center">
  <div className="max-w-2xl mx-auto">
    

    

    <div className="mt-5">
      <p className="text-gray-400 text-base mb-4">Investimento na</p>
      
      <h2 className="text-4xl font-cormorant font-light text-white tracking-wide mb-1">
        IMERSÃO<br/><span className="gradient-text font-bold">ARI</span>
      </h2>
      <p className="text-gray-500 text-6xl line-through font-normal mt-4 mb-0">R$ 899,90</p>
      <p className="gradient-text text-5xl font-bold">R$ 89,00</p>
      <p className="text-white font-semibold mt-6">ou 12x de R$ 9,20</p>
      <p className="gradient-text font-semibold">Vagas limitadas para garantir a qualidade do suporte.</p>
    </div>
    <div className=" place-items-center mt-10">
      <GarantirVagaBtn />
    </div>
  </div>
</section>
    )
}