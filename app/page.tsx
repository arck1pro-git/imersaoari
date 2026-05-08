import Hero from "./components/hero";
import LeadModal from "./components/lead-modal";
import Problem from "./components/problem";
import Sobre from "./components/sobre";
import Treinamento from "./components/treinamento";
import Pilares from "./components/pilares";
import Bonus from "./components/bonus";
import Parequem from "./components/paraquem";
import Provasocial from "./components/provasocial";
import Evento from "./components/evento";
import Preco from "./components/preco";
import Precocard from "./components/precocard";
import Garantia from "./components/garantia";
import Custo from "./components/custo";
import Faq from "./components/faq";
import PS from "./components/ps";
import Duvidas from "./components/duvidas";


export default function Home() {
  return (
    <main className="bg-black relative">
      <LeadModal />
      <Hero />

      
      <Problem />

      <Sobre />
      <Treinamento />
      <Pilares />
      <Parequem />
      <Provasocial />
      <Evento />
      <Preco />
      <Precocard />
      <Garantia />
      <Custo />
      <Faq />
      <PS />
      <Duvidas />
    </main>
  );
}