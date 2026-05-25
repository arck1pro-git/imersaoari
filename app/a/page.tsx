import Hero from "../components/a/hero";
import LeadModal from "../components/a/lead-modal";
import Sobre from "../components/a/sobre";
import Treinamento from "../components/a/treinamento";
import Grafico from "../components/a/grafico";
import Pilares from "../components/a/pilares";
import Parequem from "../components/a/paraquem";
import Evento from "../components/a/evento";
import Preco from "../components/a/preco";
import Garantia from "../components/a/garantia";
import Faq from "../components/a/faq";
import Duvidas from "../components/a/duvidas";
import Depoimento from "../components/a/depoimento";


export default function Home() {
  return (
    <main className="bg-black relative font-montserrat">
      <LeadModal />
      <Hero />
      <Treinamento />
      <Grafico />
      <Depoimento />
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