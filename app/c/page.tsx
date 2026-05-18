import Hero from "../components/hero";
import LeadModal from "../components/lead-modal";
import Sobre from "../components/sobre";
import Evento from "../components/evento";
import Preco from "../components/preco";
import Duvidas from "../components/duvidas";


export default function Home() {
  return (
    <main className="bg-black relative">
      <LeadModal />
      <Hero />
      <Evento />
      <Sobre />
      <Preco />
      <Duvidas />
    </main>
  );
}