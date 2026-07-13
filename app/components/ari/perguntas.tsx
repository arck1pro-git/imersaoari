"use client";
import { useState } from "react";
import RegistrarBtn from "./registrar-btn";

const faqItems = [
  {
    pergunta: "A Super Live ARI é paga?",
    resposta: "Não. A Super Live ARI é 100% gratuita. Basta se cadastrar para garantir sua vaga e receber o link de acesso ao evento online e ao vivo.",
    lado: "esquerda",
  },
  {
    pergunta: "Preciso ter experiência no mercado imobiliário?",
    resposta: "Não. O evento é feito também para investidores iniciantes. Vamos desmistificar os investimentos em Ativos de Renda Imobiliária sem termos técnicos complicados ou burocracia.",
    lado: "esquerda",
  },
  {
    pergunta: "Qual o valor mínimo para investir em ARI?",
    resposta: "Os investimentos em ARI começam a partir de R$ 50 mil, tornando o mercado imobiliário de alto retorno do Litoral Catarinense acessível a mais investidores.",
    lado: "esquerda",
  },
  {
    pergunta: "Como funcionam os retornos?",
    resposta: "Você pode alcançar até 36% ao ano, livre de imposto de renda, com planos de 18, 24 ou 36 meses. O rendimento pode ser recebido mensalmente ou de forma acumulada ao final da operação.",
    lado: "direita",
  },
  {
    pergunta: "Onde e quando acontece?",
    resposta: "No dia 23 de julho, às 19h30 (horário de Brasília). É 100% online e ao vivo. Você participa de onde estiver.",
    lado: "direita",
  },
  {
    pergunta: "A ARI vende imóveis ou cursos?",
    resposta: "Não. A ARI não vende imóveis nem cursos milagrosos. Também não é banco, corretora ou gestora de fundos. É o acesso estruturado a Ativos de Renda Imobiliária, com gestão completa feita pela nossa equipe.",
    lado: "direita",
  },
];

function FaqItem({ pergunta, resposta }: { pergunta: string; resposta: string }) {
  const [aberto, setAberto] = useState(false);

  return (
    <div
      className={`rounded-xl mb-3 overflow-hidden ${aberto ? "" : "glass-card"}`}
      style={aberto ? { background: "linear-gradient(135deg, #c4a540 0%, #ecce83 50%, #f5dfa8 100%)" } : undefined}
    >
      <button
        type="button"
        onClick={() => setAberto(a => !a)}
        className="w-full flex items-center justify-between px-5 py-4 text-left text-white font-semibold text-sm md:text-base touch-manipulation"
      >
        <span>{pergunta}</span>
        <span className="text-xl font-light ml-4">{aberto ? "−" : "+"}</span>
      </button>
      <div
        style={{
          display: "grid",
          gridTemplateRows: aberto ? "1fr" : "0fr",
          transition: "grid-template-rows 0.35s ease",
        }}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 text-black text-base leading-relaxed font-medium">
            {resposta}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Perguntas() {
  const esquerda = faqItems.filter((i) => i.lado === "esquerda");
  const direita = faqItems.filter((i) => i.lado === "direita");

  return (
    <section className="text-white py-16 lg:py-24 px-6 relative overflow-hidden font-inter">
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-center text-3xl md:text-5xl font-manrope tracking-tight leading-[1.1] mb-12">
          Ainda com <span className="gradient-text">dúvida?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <div>
            {esquerda.map((item, i) => (
              <FaqItem key={i} pergunta={item.pergunta} resposta={item.resposta} />
            ))}
          </div>
          <div>
            {direita.map((item, i) => (
              <FaqItem key={i} pergunta={item.pergunta} resposta={item.resposta} />
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <RegistrarBtn />
        </div>
      </div>
    </section>
  );
}
