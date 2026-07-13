import { XCircle } from "lucide-react";
import RegistrarBtn from "./registrar-btn";

const ITENS = [
  {
    titulo: "Venda de cursos milagrosos",
    texto: "Não prometemos atalhos ou fórmulas de enriquecimento rápido.",
  },
  {
    titulo: "Venda de imóveis",
    texto: "Apesar de sermos também imobiliária, a ARI não se trata da venda de imóveis.",
  },
  {
    titulo: "Banco, corretora ou gestora de fundos",
    texto: "Não somos uma instituição financeira tradicional que guarda ou gerencia seu dinheiro diretamente.",
  },
  {
    titulo: "Consultoria genérica ou “achismos”",
    texto: "Não oferecemos conselhos sem fundamento ou sem base em análise profunda.",
  },
  {
    titulo: "Serviço de “trade” ou day trade",
    texto: "Não somos focados em operações de curto prazo ou especulação diária.",
  },
  {
    titulo: "Assessoria exclusiva para ricos",
    texto: "Nossos serviços são pensados para diferentes perfis e estágios financeiros.",
  },
];

export default function NaoE() {
  return (
    <section className="text-white py-12 px-6 font-inter">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-6xl font-manrope mb-3">
            O que a ARI <span className="gradient-text">não é</span>
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            Ativo de Renda Imobiliária é transparência do começo ao fim. Por isso, deixamos claro o que você não vai encontrar aqui:
          </p>
        </div>

        <div className="bg-zinc-950 rounded-xl p-8 lg:p-14">
          <ul className="grid md:grid-cols-2 gap-5 lg:gap-6">
            {ITENS.map(({ titulo, texto }) => (
              <li key={titulo} className="flex items-start gap-3">
                <XCircle size={20} className="flex-shrink-0 mt-0.5" style={{ color: "#ef4444" }} />
                <div>
                  <p className="text-white font-manrope text-base mb-1">{titulo}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{texto}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center mt-10">
          <RegistrarBtn />
        </div>
      </div>
    </section>
  );
}
