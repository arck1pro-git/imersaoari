import Hero from "../components/hero";
import LeadModal from "../components/lead-modal";
import Preco from "../components/preco";
import Duvidas from "../components/duvidas";


export default function Home() {
  return (
    <main className="bg-black relative">
      <LeadModal />
      <Hero />
      <Preco />
      <Duvidas />
    </main>
  );
}