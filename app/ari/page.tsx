import Hero from "../components/ari/hero";
import { MarqueeBanner } from "../components/ari/marquee-banner";
import Oque from "../components/ari/oque";
import Aprender from "../components/ari/aprender";
import Parequem from "../components/ari/paraquem";
import NaoE from "../components/ari/naoe";
import Porque from "../components/ari/porque";
import Sobre from "../components/ari/sobre";
import Organiza from "../components/ari/organiza";
import Registro from "../components/ari/registro";
import Perguntas from "../components/ari/perguntas";
import Footer from "../components/ari/footer";
import Popup from "../components/ari/popup";

export default function AriPage() {
  return (
    <main className="bg-black relative">
      <Hero />
      <MarqueeBanner />
      <Aprender />
      <Parequem />
      <Porque />
      <Sobre />
      <Registro />
      <Popup />
    </main>
  );
}
