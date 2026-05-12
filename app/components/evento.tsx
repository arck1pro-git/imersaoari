import { Calendar, Monitor, Timer, Mic, BarChart2 } from "lucide-react";

export default function Evento() {

    return (
<section className=" text-white lg:py-8 py-4 px-6">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="lg:text-6xl text-4xl font-cormorant font-bold mb-12">
      Como vai ser a <span className="gradient-text">IMERSÃO ARI</span>?
    </h2> 

    <div
      style={{ padding: "1.5px", background: "linear-gradient(135deg, #c4a540 0%, #ecce83 50%, #f5dfa8 100%)", borderRadius: "1.5rem" }}
    >
    <div className="bg-zinc-950 p-8 text-left space-y-4" style={{ borderRadius: "calc(1.5rem - 1.5px)" }}>
      <div className="flex items-start gap-3 text-sm text-gray-300">
        <Calendar size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#ecce83" }} />
        Dias 26, 27 e 28 de maio às 20h (Brasília).
      </div>
      <div className="flex items-start gap-3 text-sm text-gray-300">
        <Monitor size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#ecce83" }} />
        Ao vivo pelo Youtube — link exclusivo para inscritos.
      </div>
      <div className="flex items-start gap-3 text-sm text-gray-300">
        <Timer size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#ecce83" }} />
        3 noites de conteúdo prático e aplicável.
      </div>
      <div className="flex items-start gap-3 text-sm text-gray-300">
        <Mic size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#ecce83" }} />
        ao vivo para tirar dúvidas diretamente comigo.
      </div>
      <div className="flex items-start gap-3 text-sm text-gray-300">
        <BarChart2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#ecce83" }} />
        Materiais para análise de investimento.
      </div>
    </div>
    </div>
  </div>
</section>
    )
}
