export default function Duvidas() {
  return (
    <section className="bg-zinc-900 text-white py-24 px-6 text-center relative overflow-hidden">
      <div className="absolute -bottom-96 -right-0 w-[900px] h-[900px] bg-gradient-to-tl from-blue-900 to-transparent rounded-full blur-[200px] opacity-70 pointer-events-none"></div>
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-3">
          ⚠️ Ainda está com dúvidas?
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Fale com meu time.
        </h3>
        <p className="text-gray-400 text-sm md:text-base mb-10">
          Clique no botão abaixo para tirar sua dúvida com nossa equipe pelo Whatsapp
        </p>

        <button className="button text-black font-bold uppercase tracking-widest text-sm px-10 py-4">
          QUERO FALAR COM A EQUIPE ©
        </button>

        <p className="mt-20 text-gray-600 text-xs">
          Fabricio ARI © Copyright 2026. Todos os direitos reservados.
        </p>
      </div>
    </section>
  );
}