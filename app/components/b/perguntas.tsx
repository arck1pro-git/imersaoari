"use client";
import { useState } from "react";
import GarantirVagaBtn from "./garantir-vaga-btn";

const faqItems = [
  {
    pergunta: "O que exatamente vou aprender?",
    resposta: "Fabhricio vai abrir ao vivo o método completo: como avaliar um empreendimento no litoral catarinense, como estruturar o aporte, como acompanhar o ciclo e como funciona a distribuição dos retornos. É processo real — não teoria genérica.",
    lado: "esquerda",
  },
  {
    pergunta: "Preciso ter experiência em mercado imobiliário?",
    resposta: "Não. A Imersão é estruturada para investidores com capital disponível que ainda não operam em incorporação. Você aprende o método do início, com linguagem direta e aplicação prática.",
    lado: "esquerda",
  },
  {
    pergunta: "E se eu não puder participar de uma das noites ao vivo?",
    resposta: "Recomendamos a presença ao vivo, especialmente no Q&A do último dia. Caso não consiga, as gravações ficam disponíveis por 30 dias.",
    lado: "direita",
  },
  {
    pergunta: "Por que a Imersão é paga?",
    resposta: "Porque entregamos o método real e ferramentas próprias testadas — como a planilha e o checklist — que usamos nas nossas próprias incorporações. A inscrição paga garante que teremos apenas investidores comprometidos e qualificados.",
    lado: "direita",
  },
];

function FaqItem({ pergunta, resposta }: { pergunta: string; resposta: string }) {
  const [aberto, setAberto] = useState(false);

  return (
    <div
      className="rounded-lg mb-3 overflow-hidden hover-scale"
      style={aberto
        ? { background: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #60a5fa 100%)" }
        : { background: "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.06) 0%, transparent 55%), #09090b", border: "1px solid rgba(255,255,255,0.12)" }
      }
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
          <div className="px-5 pb-5 text-white/90 text-sm leading-relaxed">
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
    <section className="text-white py-16 lg:py-24 px-6 font-poppins">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl text-center lg:text-4xl font-bold mb-12">
          Perguntas frequentes:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
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

        <div className="text-center">
          <p className="text-lg lg:text-2xl font-semibold text-white mb-2">
            Fabhricio ARI vai estar ao vivo nos dias 26, 27 e 28 de maio.
          </p>
          <p className="text-lg lg:text-2xl font-semibold gradient-text-blue mb-8">
            A pergunta é: você vai estar?
          </p>
          <GarantirVagaBtn variant="blue" className="mx-auto" />
        </div>
      </div>
    </section>
  );
}
