import ModalTrigger from "./modal-trigger";

export default function Custo() {
  return (
    <section className=" text-white py-24 px-6 text-center">
      <h2 className="text-4xl font-cormorant font-bold gradient-text mb-10">
        O valor da inscrição na Imersão ARI é irrisório<br/>perto do que você deixa de ganhar todos os meses<br/>com seu dinheiro parado em aplicações medíocres.
      </h2>

      <div className="max-w-2xl mx-auto space-y-6 text-gray-300 text-base md:text-lg">
        <p className="text-white font-semibold text-xl">
          3 dias de aprendizado agora e dobrar seu patrimônio em 3 anos ou mais 3 anos perdendo para a inflação?
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