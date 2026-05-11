export default function Duvidas() {
  return (
    <section className="bg-black text-white py-12 px-6 text-center relative overflow-hidden">
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold font-cormorant gradient-text mb-3">
           Ainda está com dúvidas?
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Fale com meu time.
        </h3>
        <p className="text-gray-400 text-sm md:text-base mb-10">
          Clique no botão abaixo para tirar sua dúvida com nossa equipe pelo Whatsapp
        </p>

        <a
          href="https://wa.me/5547991991866?text=Ol%C3%A1!%20tudo%20certo%3F%20cheguei%20aqui%20pelo%20link%20em%20sua%20landing%20page%20e%20gostaria%20de%20me%20informar%20mais%20sobre%20o%20evento%20Imers%C3%A3o%20ARI"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block button text-black font-bold uppercase tracking-widest text-sm px-10 py-4"
        >
          QUERO FALAR COM A EQUIPE
        </a>

        <p className="mt-20 text-gray-600 text-xs">
          Fabhricio ARI © Copyright 2026. Todos os direitos reservados.
        </p>
      </div>
    </section>
  );
}