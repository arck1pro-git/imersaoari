"use client";
import { useState } from "react";

const faqItems = [
  {
    pergunta: "Vou ter acesso à gravação?",
    resposta: "Sim, os alunos inscritos terão acesso à gravação por 30 dias para revisar o método e aprofundar o entendimento.",
    lado: "esquerda",
  },
  {
    pergunta: "É pra mim mesmo se eu não tenho experiência em investir em incorporações?",
    resposta: "Sim. A Imersão foi desenhada para investidores que querem começar do zero com método, sem precisar de experiência anterior. Você vai aprender o sistema completo do início, com linguagem direta e aplicação prática.",
    lado: "esquerda",
  },
  {
    pergunta: "Como recebo o link de acesso?",
    resposta: "Após a confirmação do pagamento, você receberá no e-mail cadastrado todas as instruções para acessar a plataforma. O acesso é imediato após a aprovação.",
    lado: "esquerda",
  },
  {
    pergunta: "E se não puder estar presente nos 3 dias?",
    resposta: "Recomendamos fortemente a presença ao vivo, especialmente no Q&A do último dia. Mas caso não consiga, as gravações ficam disponíveis por 30 dias para que você assista no seu ritmo.",
    lado: "esquerda",
  },
  {
    pergunta: "Qual o valor do investimento?",
    resposta: "O investimento para esta turma é de R$ 89,00. Você pode parcelar em até 12 vezes no cartão de crédito ou pagar via Pix.",
    lado: "direita",
  },
  {
    pergunta: "Por que a Imersão é paga?",
    resposta: "Porque entregamos o método real e ferramentas próprias testadas e validadas (como a planilha e o checklist) que usamos em nossas incorporações. Cobrar uma taxa de inscrição garante que teremos apenas investidores comprometidos e qualificados no grupo.",
    lado: "direita",
  },
  {
    pergunta: "Tenho garantia de retorno?",
    resposta: "A Imersão entrega conhecimento, método e ferramentas, não prometemos retorno financeiro garantido, pois isso depende das suas decisões de investimento. O que garantimos é o conteúdo mais completo e prático disponível sobre investimento em incorporação imobiliária.",
    lado: "direita",
  },
  {
    pergunta: "E se eu tiver outra dúvida que não está aqui?",
    resposta: "Fale diretamente com a nossa equipe pelo WhatsApp. Respondemos todas as dúvidas antes, durante e após a Imersão.",
    lado: "direita",
  },
];

function FaqItem({ pergunta, resposta }: { pergunta: string; resposta: string }) {
  const [aberto, setAberto] = useState(false);

  return (
    <div
      className="rounded-md mb-3 overflow-hidden"
      style={aberto ? { background: "linear-gradient(135deg, #c4a540 0%, #ecce83 50%, #f5dfa8 100%)" } : { background: "#27272a" }}
    >
      <button
        onClick={() => setAberto(a => !a)}
        className="w-full flex items-center justify-between px-5 py-4 text-left text-white font-semibold text-sm md:text-base"
      >
        <span>{pergunta}</span>
        <span className="text-xl font-light ml-4">{aberto ? "−" : "+"}</span>
      </button>
      <div
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight: aberto ? "300px" : "0px", opacity: aberto ? 1 : 0 }}
      >
        <div className="px-5 pb-5 text-black text-sm leading-relaxed font-medium">
          {resposta}
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const esquerda = faqItems.filter((i) => i.lado === "esquerda");
  const direita = faqItems.filter((i) => i.lado === "direita");

  return (
    <section className="text-white py-20 px-6 relative overflow-hidden">
      

      <div className="relative z-10 max-w-5xl mx-auto">
        <p className="text-center gradient-text font-bold tracking-[0.3em] uppercase text-sm mb-3">
          FAQ — PERGUNTAS FREQUENTES
        </p>
        <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-12">
          Ainda com dúvida? Lê aqui.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
      </div>
    </section>
  );
}
