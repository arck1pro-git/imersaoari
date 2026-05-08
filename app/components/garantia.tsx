export default function garantia() {

    return(
<section className=" text-white py-24 px-6">
  <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    <div className="flex items-center justify-center">
      <div className="relative w-52 h-52 rounded-full border-2 border-yellow-600 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border border-dashed border-yellow-800 m-3"></div>
        <div className="text-center">
          <p className="gradient-text text-xs uppercase tracking-widest font-semibold">7 Dias de</p>
          <p className="gradient-text text-6xl font-black">7</p>
          <p className="gradient-text text-xs uppercase tracking-widest font-semibold">Garantia</p>
        </div>
      </div>
    </div>

    <div>
      <h3 className="gradient-text text-2xl font-bold mb-4">Sua satisfação ou seu dinheiro de volta.</h3>
      <p className="text-gray-300 text-sm leading-relaxed mb-4">
        Eu confio tanto na entrega técnica da Imersão ARI que te dou 7 dias de garantia. Se após a primeira aula você sentir que o conteúdo não é para o seu nível de investidor, basta enviar um e-mail e devolvemos 100% do seu investimento.
      </p>
      <p className="text-gray-300 text-sm leading-relaxed">
        Sem perguntas, sem burocracia. O risco é todo meu.
      </p>
    </div>
  </div>
</section>
    )
}