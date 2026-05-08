import ModalTrigger from "./modal-trigger";

export default function Custo() {
  return (
    <section className=" text-white py-24 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
        O que custa mais caro?
      </h2>
      <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-10">
        O valor da Imersão, ou mais 3 anos perdendo para a inflação?
      </h2>

      <p className="text-xl font-bold text-white mb-8">Pensa comigo.</p>

      <div className="max-w-2xl mx-auto space-y-4 text-gray-300 text-base md:text-lg">
        <p>O valor da inscrição na Imersão ARI é irrisório perto do que você deixa de ganhar todos os meses com seu dinheiro parado em aplicações medíocres.</p>
        <p>Quanto vale transformar R$ 50 mil em R$ 100 mil em 36 meses?</p>
        <p>Quanto vale ter remuneração mensal enquanto o empreendimento cresce?</p>
        <p className="text-white mt-6">
          3 dias de aprendizado agora ou mais 3 anos perdendo para a inflação?
        </p>
        <p className="text-white">Eu vou estar lá. A pergunta é: você vai estar?</p>
      </div>

      <div className="mt-10">
        <ModalTrigger className="button text-black font-bold uppercase tracking-widest text-sm px-10 py-4">
          QUERO GARANTIR MINHA VAGA
        </ModalTrigger>
      </div>
    </section>
  );
}