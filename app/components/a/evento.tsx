import { Calendar, Monitor, PlayCircle, BookOpen, MessageCircle, BarChart2 } from "lucide-react";
import GarantirVagaBtn from "../garantir-vaga-btn";

export default function Evento() {

    return (
<section className=" text-white lg:py-8 py-4 px-6 font-montserrat">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="lg:text-6xl text-4xl font-montserrat font-bold mb-12">
      Como vai ser a <span className="gradient-text">IMERSÃO ARI</span>?
    </h2>

    <div
      style={{ padding: "1.5px", background: "linear-gradient(135deg, #c4a540 0%, #ecce83 50%, #f5dfa8 100%)", borderRadius: "1.5rem" }}
    >
    <div className="bg-zinc-950 p-8 text-left space-y-4" style={{ borderRadius: "calc(1.5rem - 1.5px)" }}>
      <div className="flex items-start gap-3 text-base text-gray-300">
        <Calendar size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#ecce83" }} />
        Dia 30 de maio às 9h (Brasília).
      </div>
      <div className="flex items-start gap-3 text-base text-gray-300">
        <Monitor size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#ecce83" }} />
        Ao vivo pelo Youtube. Link exclusivo para inscritos.
      </div>
      <div className="flex items-start gap-3 text-base text-gray-300">
        <PlayCircle size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#ecce83" }} />
        Gravação do treinamento para assistir a qualquer momento.
      </div>
      <div className="flex items-start gap-3 text-base text-gray-300">
        <BookOpen size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#ecce83" }} />
        Conteúdo técnico, prático e aplicável.
      </div>
      <div className="flex items-start gap-3 text-base text-gray-300">
        <MessageCircle size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#ecce83" }} />
        Perguntas e Respostas ao vivo para tirar dúvidas.
      </div>
      <div className="flex items-start gap-3 text-base text-gray-300">
        <BarChart2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#ecce83" }} />
        Materiais para análise de investimento em incorporação imobiliária.
      </div>
    </div>
    </div>
  </div>

  <div className="flex justify-center mt-10">
    <GarantirVagaBtn />
  </div>
</section>
    )
}
