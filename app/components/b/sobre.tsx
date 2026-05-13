import { Building2, MapPin, Briefcase } from "lucide-react";

function TextBlock() {
  return (
    <div className="relative z-10 rounded-lg p-8 flex flex-col justify-center -translate-y-12 -ml-6 aspect-square hover-scale" style={{ background: "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.07) 0%, transparent 55%), rgba(0,0,0,0.78)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.25)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2), inset 1px 0 0 rgba(255,255,255,0.1)" }}>
      <div className="relative flex gap-4">
        <div className="w-[3px] rounded-full shrink-0" style={{ background: "linear-gradient(to bottom, #1e3a8a, #2563eb 40%, #ffffff)" }} />
        <div>
          <p className="text-sm mb-2" style={{ color: "var(--marquee-blue)" }}>Incorporador e Investidor Imobiliário</p>
          <h3 className="text-2xl font-bold mb-5 text-white">FABHRICIO ARI</h3>
          <div className="space-y-3 text-gray-400 text-sm leading-relaxed">
            <p>Comecei no mercado imobiliário em 2006. Passei 20 anos mergulhado na indústria da construção civil.</p>
            <p>Não foi só teoria. Foi canteiro, reunião com investidor, cronograma apertado, obra atrasada, cliente nervoso, fornecedor cobrando.</p>
            <p>Foi ali, no dia a dia, que eu entendi o que realmente move um empreendimento: não é só concreto e planta. É gente. É dinheiro circulando. É timing. É entregar o que promete.</p>
            <p>Fundei a ARCK1PRO em 2006. Montei um time que pensa como eu: arquitetos, engenheiros, advogados. Gente que não aceita amadorismo. Gente que resolve.</p>
            <p>Já desenvolvi mais de 350 empreendimentos. Estruturei operações do zero. Levantei capital. Viabilizei projetos que muitos achavam impossíveis.</p>
            <p>Depois de anos no mercado, estruturei o ARI: o Ativo certo para o investidor do mercado imobiliário.</p>
            <p className="font-semibold text-white">Transformo terreno em oportunidade. Oportunidade em empreendimento. Empreendimento em lucro real pro investidor.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PhotoBlock() {
  return (
    <div className="relative rounded-lg overflow-hidden aspect-square">
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10" />
      <div className="w-full h-full bg-cover bg-top" style={{ backgroundImage: "url('/fabrhicio.webp')" }} />
      <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-col gap-2">
        <div className="flex items-center gap-2 px-4 py-2 w-fit rounded-lg hover-scale" style={{ background: "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.08) 0%, transparent 60%), rgba(0,0,0,0.6)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.15)" }}>
          <Building2 className="w-4 h-4 shrink-0" style={{ color: "var(--marquee-blue)" }} />
          <span className="text-xs font-medium text-white">+350 Empreendimentos desenvolvidos</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 w-fit rounded-lg hover-scale" style={{ background: "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.08) 0%, transparent 60%), rgba(0,0,0,0.6)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.15)" }}>
          <MapPin className="w-4 h-4 shrink-0" style={{ color: "var(--marquee-blue)" }} />
          <span className="text-xs font-medium text-white">+80 Terrenos negociados</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 w-fit rounded-lg hover-scale" style={{ background: "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.08) 0%, transparent 60%), rgba(0,0,0,0.6)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.15)" }}>
          <Briefcase className="w-4 h-4 shrink-0" style={{ color: "var(--marquee-blue)" }} />
          <span className="text-xs font-medium text-white">+50 Incorporadoras assessoradas</span>
        </div>
      </div>
    </div>
  );
}

function MobileSobre() {
  return (
    <div className="flex flex-col gap-4">
      {/* Foto quadrada menor */}
      <div className="relative w-40 aspect-square rounded-lg overflow-hidden mx-auto">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
        <div className="w-full h-full bg-cover bg-top" style={{ backgroundImage: "url('/fabrhicio.webp')" }} />
      </div>
      {/* Texto */}
      <div className="rounded-lg p-6" style={{ background: "rgba(0,0,0,0.85)", border: "1px solid rgba(255,255,255,0.12)" }}>
        <div className="flex gap-3">
          <div className="w-[3px] rounded-full shrink-0" style={{ background: "linear-gradient(to bottom, #1e3a8a, #2563eb 40%, #ffffff)" }} />
          <div>
            <p className="text-xs mb-1" style={{ color: "var(--marquee-blue)" }}>Incorporador e Investidor Imobiliário</p>
            <h3 className="text-xl font-bold mb-4 text-white">FABHRICIO ARI</h3>
            <div className="space-y-2 text-gray-400 text-xs leading-relaxed">
              <p>Comecei no mercado imobiliário em 2006. Passei 20 anos mergulhado na indústria da construção civil.</p>
              <p>Foi canteiro, reunião com investidor, obra atrasada, cliente nervoso. Foi ali que entendi o que move um empreendimento.</p>
              <p>Fundei a <span className="text-white font-medium">ARCK1PRO</span> em 2006. Já desenvolvi mais de 350 empreendimentos e viabilizei projetos que muitos achavam impossíveis.</p>
              <p className="font-semibold text-white">Transformo terreno em oportunidade. Oportunidade em empreendimento. Empreendimento em lucro real pro investidor.</p>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              {[
                { icon: Building2, text: "+350 Empreendimentos desenvolvidos" },
                { icon: MapPin, text: "+80 Terrenos negociados" },
                { icon: Briefcase, text: "+50 Incorporadoras assessoradas" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <Icon className="w-3 h-3 shrink-0" style={{ color: "var(--marquee-blue)" }} />
                  <span className="text-xs text-gray-300">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Sobre() {
  return (
    <section className="relative py-16 lg:py-24 px-4 font-poppins text-white overflow-hidden">
      {/* Sombra azul meia lua — apenas lg */}
      <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[700px] h-[900px] pointer-events-none z-0" style={{ background: "radial-gradient(ellipse at left center, rgba(37,99,235,0.3) 0%, rgba(30,58,138,0.1) 40%, transparent 70%)", filter: "blur(40px)" }} />

      {/* Desktop */}
      <div className="hidden lg:grid max-w-4xl mx-auto grid-cols-2 gap-20 items-stretch pt-8 -translate-x-16">
        <PhotoBlock />
        <TextBlock />
      </div>
      {/* Mobile */}
      <div className="block lg:hidden max-w-md mx-auto">
        <MobileSobre />
      </div>
    </section>
  );
}
