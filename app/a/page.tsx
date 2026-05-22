import Hero from "../components/a/hero";
import LeadModal from "../components/a/lead-modal";
import Problem from "../components/a/problem";
import Sobre from "../components/a/sobre";
import Treinamento from "../components/a/treinamento";
import Grafico from "../components/a/grafico";
import Pilares from "../components/a/pilares";
import Parequem from "../components/a/paraquem";
import Evento from "../components/a/evento";
import Preco from "../components/a/preco";
import Precocard from "../components/a/precocard";
import Garantia from "../components/a/garantia";
import Custo from "../components/a/custo";
import Faq from "../components/a/faq";
import PS from "../components/a/ps";
import Duvidas from "../components/a/duvidas";


export default function Home() {
  return (
    <main className="bg-black relative font-montserrat">
      <LeadModal />
      <Hero />
      <Treinamento />
      <Grafico />
      <Pilares />
      <Parequem />
      <Evento />
      <Preco />
      <Sobre />
      <Garantia />
      <Faq />
      <Duvidas />
    </main>
  );
}