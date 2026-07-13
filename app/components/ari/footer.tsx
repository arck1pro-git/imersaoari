import RegistrarBtn from "./registrar-btn";

export default function Footer() {
  return (
    <section className="relative bg-black text-white py-16 px-6 text-center font-inter overflow-hidden border-t border-white/10">
      <div className="absolute bottom-0 left-0 right-0 h-80 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 100% at 50% 100%, rgba(30,58,138,0.6), transparent)" }} />
      <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
        <p className="text-gray-300 text-lg mb-6">
          Ainda tem dúvidas? Fale com nossa equipe.
        </p>

        <RegistrarBtn />

        <p className="mt-16 text-gray-600 text-xs">
          © 2026 A R I, Ativos de Renda Imobiliária. Todos os direitos reservados.
        </p>
      </div>
    </section>
  );
}
