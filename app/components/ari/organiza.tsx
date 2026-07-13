import RegistrarBtn from "./registrar-btn";

export default function Organiza() {
  return (
    <section className="text-white bg-zinc-950 py-12 px-6 font-inter">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="lg:text-6xl text-4xl font-manrope mb-10">
          Quem organiza a <span className="gradient-text">Super Live ARI?</span>
        </h2>

        <div
          style={{ padding: "1.5px", background: "linear-gradient(135deg, #c4a540 0%, #ecce83 50%, #f5dfa8 100%)", borderRadius: "1.5rem" }}
          className="mb-12"
        >
          <div className="bg-black p-8 lg:p-10 text-left" style={{ borderRadius: "calc(1.5rem - 1.5px)" }}>
            <h3 className="text-xl lg:text-2xl font-manrope mb-4 gradient-text">
              ARCK1PRO: seu parceiro estratégico no litoral catarinense
            </h3>
            <p className="text-gray-300 text-base leading-relaxed">
              Na ARCK1PRO, somos especialistas em impulsionar o sucesso no dinâmico mercado imobiliário do Litoral Catarinense. Oferecemos consultoria estratégica para incorporadores, identificamos e negociamos as melhores áreas para desenvolvimento e elaboramos projetos que se destacam pela inovação e rentabilidade. Nossa missão é otimizar cada etapa do processo imobiliário, garantindo que nossos clientes incorporadores e investidores alcancem seus objetivos com segurança e excelência.
            </p>
          </div>
        </div>

        <h2 className="lg:text-6xl text-4xl font-manrope mb-8">
          Por que realizamos a <span className="gradient-text">Super Live ARI?</span>
        </h2>
        <div className="space-y-5 text-gray-300 text-base leading-relaxed">
          <p>
            A Super Live ARI nasceu do nosso compromisso em democratizar o acesso a investimentos imobiliários de alto rendimento. Muitos investidores desejam entrar nesse mercado promissor, mas se sentem intimidados pela complexidade ou pela percepção de que é preciso um capital milionário.
          </p>
          <p>
            É por isso que eu e minha equipe da ARCK1PRO organizamos a Super Live ARI: para desmistificar os investimentos em ativos de renda imobiliária no Litoral Catarinense.
          </p>
          <p>
            Nosso objetivo é capacitar você, investidor, a compreender as oportunidades reais e os segredos para multiplicar seu patrimônio de forma acessível e segura, com aportes a partir de R$ 50 mil e retornos que podem alcançar até 36% ao ano.
          </p>
          <p className="font-semibold text-white">
            É a nossa forma de abrir as portas para que mais pessoas construam um futuro financeiro sólido através do investimento inteligente no litoral catarinense.
          </p>
        </div>

        <div className="flex justify-center mt-12">
          <RegistrarBtn />
        </div>
      </div>
    </section>
  );
}
