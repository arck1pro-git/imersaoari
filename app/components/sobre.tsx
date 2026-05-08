export default function Sobre() {

    return (
<section className="relative text-white py-24 px-6">
  <div className="absolute bottom-0 left-0 right-0 h-80 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 100% at 50% 100%, rgba(30,58,138,0.6), transparent)' }} />

  <div className="relative max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    <div>
      <h2 className="text-5xl font-cormorant font-bold mb-6">
        Eu sou <span className="gradient-text">Fabrhicio ARI.</span>
      </h2>
      <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
        <p>Comecei no mercado imobiliário em 2006. Passei 20 anos mergulhado na indústria da construção civil.</p>
        <p>Não foi só teoria. Foi canteiro, reunião com investidor, cronograma apertado, obra atrasada, cliente nervoso, fornecedor cobrando.</p>
        <p>Foi ali, no dia a dia, que eu entendi o que realmente move um empreendimento: não é só concreto e planta. É gente. É dinheiro circulando. É timing. É entregar o que promete.</p>
        <p>Fundei a ARCK1PRO em 2006. Montei um time que pensa como eu: arquitetos, engenheiros, advogados. Gente que não aceita amadorismo. Gente que resolve.</p>
        <p>Já participei de mais de 300 lançamentos. Estruturei operações do zero. Levantei capital. Viabilizei projetos que muitos achavam impossíveis.</p>
        <p>Depois de anos no mercado, estruturei o ARI: o Ativo certo para o investidor do mercado imobiliário.</p>
        <p className="font-semibold text-white">Transformo terreno em oportunidade. Oportunidade em empreendimento. Empreendimento em lucro real pro investidor.</p>
      </div>
    </div>

    <div className="rounded-sm aspect-[4/5] overflow-hidden">
      <img src="/fabrhicio.jpg" alt="Fabrício ARI" className="w-full h-full object-cover object-top" />
    </div>
  </div>

</section>
    )
}