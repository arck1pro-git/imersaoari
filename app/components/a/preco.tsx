import GarantirVagaBtn from "../garantir-vaga-btn"
export default function Preco() {
    return (
<section className="text-white py-12 px-6 text-center font-montserrat">
  <div className="max-w-2xl mx-auto">
    

    

    <div className="mt-5">
<p className="gradient-text font-bold text-4xl lg:text-6xl uppercase tracking-widest mb-8">
          O MELHOR INVESTIMENTO É INVESTIR EM CONHECIMENTO.
        </p>      
      <h2 className="text-4xl font-montserrat font-light text-white tracking-wide mb-6">
        IMERSÃO<br/><span className="gradient-text font-bold">ARI</span>
      </h2>

      <div className="w-full mb-8 rounded-xl overflow-hidden border border-white/10 text-left">
        <div className="grid grid-cols-[1fr_auto] bg-white/5 px-4 py-2 border-b border-white/10">
          <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">O que você vai aprender</span>
          <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Incluso</span>
        </div>
        {[
          "Aprender a Metodologia ARI",
          "Aprender a gerar renda passiva de até 2,5% ao mês",
          "Aprender a dobrar seu patrimônio em 3 anos",
          "Acessar o mercado imobiliário que mais valoriza no país",
        ].map((item, i, arr) => (
          <div
            key={item}
            className={`grid grid-cols-[1fr_auto] items-center px-4 py-3 ${i < arr.length - 1 ? "border-b border-white/5" : ""} ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}
          >
            <span className="text-gray-200 text-sm font-semibold">{item}</span>
            <span className="gradient-text font-bold text-base ml-6">✓</span>
          </div>
        ))}
      </div>

      <p className="text-gray-500 text-2xl line-through font-normal mt-4 mb-0">R$ 14.993,00</p>
      <p className="text-red-500 text-4xl lg:text-5xl font-bold mt-2">12x de R$ 9,20</p>

    </div>
    <div className=" place-items-center mt-10">
      <GarantirVagaBtn />
    </div>
  </div>
</section>
    )
}