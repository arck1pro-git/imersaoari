import ModalTrigger from "./modal-trigger";

export default function PS() {
  return (
    <section className="text-white py-12 px-6 text-center">
      <p className="gradient-text font-bold tracking-widest uppercase text-sm mb-8">
        P.S. — EU JÁ TE FALEI E REPITO:
      </p>

      <div className="max-w-2xl mx-auto space-y-5 text-gray-300 text-base md:text-lg">
        <p>Eu não ensino o que aprendi em livro. Eu ensino o que vivo todos os dias há 20 anos.</p>
        <p>
          Essa é a Imersão que eu faço pra investidor sério, investidor que está disposto
          a parar de perder para a inflação e começar a multiplicar com método.
        </p>
        <p className="text-white">Te espero nos dias 26, 27 e 28 de maio.</p>
      </div>

      <div className="mt-10">
        <p className="font-serif text-4xl md:text-5xl gradient-text tracking-wide mb-1">
          Fabhricio ARI
        </p>
        <p className="text-gray-400 text-sm uppercase tracking-widest">
          Incorporador e Investidor Imobiliário
        </p>
      </div>

      <div className="mt-10">
        <ModalTrigger className="button text-black font-bold uppercase tracking-widest text-sm px-10 py-4">
          GARANTIR MINHA VAGA
        </ModalTrigger>
      </div>
    </section>
  );
}