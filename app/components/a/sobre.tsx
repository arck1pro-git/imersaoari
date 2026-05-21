import Image from "next/image";
import GarantirVagaBtn from "../garantir-vaga-btn";

export default function Sobre() {

    return (
<section className="relative text-white py-12 px-6 font-montserrat">
  <div className="absolute bottom-0 left-0 right-0 h-80 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 100% at 50% 100%, rgba(30,58,138,0.6), transparent)' }} />

  <div className="relative lg:text-left text-center max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    <div>
      <h2 className="lg:text-6xl text-4xl font-montserrat font-bold mb-6">
        Quem é <span className="gradient-text">Fabhricio ARI?</span>
      </h2>
      <div className="space-y-4 text-gray-300 text-xs leading-relaxed">
        <p>Arquiteto, incorporador e investidor imobiliário.</p>
        <p>Casado e pai de dois filhos, uma menina e um menino.</p>
        <p>Ensino o que aprendi ao longo de 20 anos desenvolvendo mais de 350 empreendimentos no litoral catarinense.</p>
        <p>Sócio e fundador da ARCK1PRO, Criador do Método ARI, que me permitiu sair de R$ 3 milhões para mais de R$ 10 milhões de patrimônio em apenas 4 anos investindo nas incorporações que eu mesmo desenvolvi para meus mais de 50 clientes.</p>
        <p className="font-semibold text-white">E agora te permito ter acesso a esse método ARI para dobrar seu patrimônio em até 3 anos.</p>
      </div>
    </div>

    <div className="rounded-sm aspect-[4/5] overflow-hidden">
      <Image src="/fabrhicio.webp" alt="Fabrício ARI" width={600} height={750} className="w-full h-full object-cover object-top" />
    </div>
  </div>

  <div className="flex justify-center mt-10">
    <GarantirVagaBtn />
  </div>

</section>
    )
}