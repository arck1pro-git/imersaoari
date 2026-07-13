import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import RegistrarBtn from "./registrar-btn";

const CREDENCIAIS = [
  "20 anos no segmento de Construção Civil",
  "+300 empreendimentos desenvolvidos",
  "Especialista em Estruturação de Novos Negócios",
  "Pós-Graduado em Incorporação Imobiliária",
  "Arquiteto e Urbanista, CAU/SC 167832-9",
  "Pós-Graduado em Arquitetura de Luxo",
  "Pós-Graduado em Viabilidade de Empreendimentos",
];

export default function Sobre() {
  return (
    <section className="relative text-white py-16 lg:py-24 px-6 font-inter overflow-hidden">
      <div className="relative max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Foto */}
        <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-sm w-full mx-auto lg:mx-0 order-1">
          <Image src="/fabrhicio.webp" alt="Fabhrício ARI" fill sizes="(max-width: 1024px) 100vw, 400px" className="object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <div className="glass-card rounded-2xl px-4 py-3">
              <p className="gradient-text font-manrope text-base leading-tight">Fabhrício ARI</p>
              <p className="text-gray-400 text-xs">@fabhricioari · @arck1pro</p>
            </div>
          </div>
        </div>

        {/* Texto */}
        <div className="text-center lg:text-left order-2">
          <h2 className="text-3xl md:text-5xl font-manrope tracking-tight leading-[1.1] mb-6">
            Quem <span className="gradient-text">apresenta?</span>
          </h2>

          <div className="space-y-4 text-gray-300 text-base leading-relaxed">
            <p>Fabrício Pavesi Junior cresceu dentro do mercado da construção civil. Desde cedo enxergou o projeto arquitetônico como ponto de partida de um negócio maior, e formou-se arquiteto para atuar ao lado de incorporadores do litoral catarinense, acompanhando de perto como os empreendimentos nascem, travam e prosperam.</p>
            <p>Com a especialização em incorporação imobiliária, passou a orientar incorporadores de todo o Brasil interessados em atuar no litoral de Santa Catarina. A <span className="text-white font-medium">ARCK1PRO</span> começou como escritório de projetos e logo se tornou consultoria estratégica para quem queria crescer na região.</p>
          </div>

          <div className="glass-card rounded-2xl p-5 mt-7 grid sm:grid-cols-2 gap-x-5 gap-y-3 text-left">
            {CREDENCIAIS.map((c) => (
              <div key={c} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#ecce83" }} />
                <span className="text-gray-300 text-sm leading-snug">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative flex justify-center mt-12">
        <RegistrarBtn />
      </div>
    </section>
  );
}
