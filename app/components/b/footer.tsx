function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.827L.057 23.882a.5.5 0 0 0 .611.625l6.218-1.635A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.796 9.796 0 0 1-5.001-1.374l-.358-.214-3.712.976.992-3.624-.234-.373A9.793 9.793 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <section className="relative bg-black text-white py-16 px-6 text-center font-poppins overflow-hidden border-t border-white/20">
      <div className="absolute bottom-0 left-0 right-0 h-96 pointer-events-none" style={{ background: "radial-gradient(ellipse 100% 100% at 50% 100%, rgba(37,99,235,0.7) 0%, rgba(30,58,138,0.3) 40%, transparent 70%)" }} />
      <div className="relative z-10 max-w-xl mx-auto">
        <p className="text-gray-300 text-lg mb-6">
          Ainda tem dúvidas? Fale com nossa equipe.
        </p>

        <a
          href="https://wa.me/5547991991866?text=Ol%C3%A1!%20tudo%20certo%3F%20cheguei%20aqui%20pelo%20link%20em%20sua%20landing%20page%20e%20gostaria%20de%20me%20informar%20mais%20sobre%20o%20evento%20Imers%C3%A3o%20ARI"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 button-blue font-bold uppercase tracking-widest text-sm px-10 py-4"
        >
          <WhatsAppIcon /> QUERO FALAR COM A EQUIPE
        </a>

        <p className="mt-16 text-gray-600 text-xs">
          Fabhricio ARI © 2026. Todos os direitos reservados.
        </p>
      </div>
    </section>
  );
}
