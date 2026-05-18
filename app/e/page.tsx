import Hero from "../components/b/hero";
import { MarqueeBanner } from "../components/b/marquee-banner";
import LeadModal from "../components/lead-modal";
import Sobre from "../components/b/sobre";
import Parequem from "../components/b/paraquem";
import Oque from "../components/b/oque";
import OqueVaiTer from "../components/b/oquevaiter";
import Perguntas from "../components/b/perguntas";
import Footer from "../components/b/footer";
import Valor from "../components/b/valor";



export default function HomeB() {
  return (
    <main className="bg-black relative">
      <LeadModal />
      <Hero />
      <MarqueeBanner />
      <div className="relative">
        <div className="hidden lg:block absolute top-0 bottom-0 left-30 w-px bg-white/20 z-0 pointer-events-none" />
        <div className="hidden lg:block absolute top-0 bottom-0 right-30 w-px bg-white/20 z-0 pointer-events-none" />
        <Parequem />
        <Oque />
        <OqueVaiTer />
        <Sobre />
        <Valor />
        <Perguntas />
        <Footer />
      </div>
    </main>
  );
}