const faqItems = [
  {
    pergunta: "Vou ter acesso à gravação?",
    resposta:
      "Sim, os alunos inscritos terão acesso à gravação por 30 dias para revisar o método e aprofundar o entendimento.",
    aberto: true,
    lado: "esquerda",
  },
  {
    pergunta: "É pra mim mesmo se eu não tenho experiência em imóvel?",
    resposta: null,
    aberto: false,
    lado: "esquerda",
  },
  {
    pergunta: "Como recebo o link de acesso?",
    resposta: null,
    aberto: false,
    lado: "esquerda",
  },
  {
    pergunta: "E se não puder estar presente nos 3 dias?",
    resposta: null,
    aberto: false,
    lado: "esquerda",
  },
  {
    pergunta: "Qual o valor do investimento?",
    resposta: "O investimento para esta turma é de R$ [VALOR X]. Você pode parcelar em até [X] vezes no cartão de crédito ou pagar via Pix.",
    aberto: false,
    lado: "direita",
  },
  {
    pergunta: "Por que a Imersão é paga?",
    resposta: "Porque entregamos o método real e ferramentas proprietárias (como a planilha e o checklist) que usamos em nossas incorporações. Cobrar uma taxa de inscrição garante que teremos apenas investidores comprometidos e qualificados no grupo.",
    aberto: false,
    lado: "direita",
  },
  {
    pergunta: "Tenho garantia de retorno?",
    resposta: null,
    aberto: false,
    lado: "direita",
  },
  {
    pergunta: "E se eu tiver outra dúvida que não está aqui?",
    resposta: null,
    aberto: false,
    lado: "direita",
  },
];

interface FaqItemProps {
  pergunta: string;
  resposta: string | null;
  aberto: boolean;
}

function FaqItem({ pergunta, resposta, aberto }: FaqItemProps) {
  return (
    <div
      className={`rounded-md mb-3 overflow-hidden ${
        aberto ? "bg-yellow-600" : "bg-zinc-800"
      }`}
    >
      <button className="w-full flex items-center justify-between px-5 py-4 text-left text-white font-semibold text-sm md:text-base">
        <span>{pergunta}</span>
        <span className="text-xl font-light ml-4">{aberto ? "−" : "+"}</span>
      </button>
      {aberto && resposta && (
        <div className="px-5 pb-5 text-white text-sm leading-relaxed">
          {resposta}
        </div>
      )}
    </div>
  );
}

export default function Faq() {
  const esquerda = faqItems.filter((i) => i.lado === "esquerda");
  const direita = faqItems.filter((i) => i.lado === "direita");

  return (
    <section className=" text-white py-20 px-6 relative overflow-hidden">
      {/* Letras decorativas de fundo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-5">
        <span className="text-[20rem] font-black text-white leading-none tracking-tighter">
          FAQ
        </span>
      </div>

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
              <FaqItem key={i} {...item} />
            ))}
          </div>
          <div>
            {direita.map((item, i) => (
              <FaqItem key={i} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}