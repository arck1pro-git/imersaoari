import GarantirVagaBtn from "../garantir-vaga-btn";

export default function Treinamento() {

    return (
<section className="text-white bg-zinc-950 py-12 px-6 font-montserrat">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="lg:text-6xl text-4xl font-montserrat font-bold mb-8">
      O que é a <span className="gradient-text">Imersão ARI?</span>
    </h2>

    <div className="space-y-5 text-gray-300 text-base leading-relaxed">
      <p>
        Um treinamento técnico e prático desenhado exclusivamente para investidores com capital acima de R$ 50 mil que querem posicionar seu patrimônio na etapa mais lucrativa do mercado imobiliário: a incorporação.
      </p>
      <p>
        Eu não vou te ensinar teoria. Vou te mostrar o método exato que eu utilizei para multiplicar meu próprio patrimônio, saindo de R$ 3 milhões para R$ 10 milhões em apenas 4 anos.
      </p>
      <p>
        Na IMERSÃO ARI online e ao vivo, vou guiar você pessoalmente pelos bastidores desse modelo de negócio, revelando como parar de comprar imóveis prontos e deixar de investir em produtos financeiros de baixo retorno e passar a lucrar como os grandes investidores no mercado imobiliário que mais valoriza no país.
      </p>
    </div>

    <div className="flex justify-center mt-10">
      <GarantirVagaBtn />
    </div>
  </div>
</section>
    )
}