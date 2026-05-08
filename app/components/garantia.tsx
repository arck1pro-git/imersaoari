export default function garantia() {

    return(
<section className=" text-white py-24 px-6">
  <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    <div className="flex items-center justify-center">
      <div
        className="relative w-72 h-72 rounded-full flex items-center justify-center"
        style={{ padding: "2px", background: "linear-gradient(135deg, #c4a540 0%, #ecce83 50%, #f5dfa8 100%)", borderRadius: "9999px" }}
      >
        {/* Pontilhado girando */}
        <div
          className="spin-slow absolute inset-0 rounded-full"
          style={{ border: "2px dashed rgba(236, 206, 131, 0.6)", margin: "10px", borderRadius: "9999px" }}
        />
        {/* Fundo interno */}
        <div className="w-full h-full rounded-full bg-zinc-950 flex items-center justify-center">
          <div className="text-center">
            <p className="gradient-text text-xs uppercase tracking-widest font-semibold">7 Dias de</p>
            <p className="gradient-text text-8xl font-black leading-none">7</p>
            <p className="gradient-text text-xs uppercase tracking-widest font-semibold">Garantia</p>
          </div>
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