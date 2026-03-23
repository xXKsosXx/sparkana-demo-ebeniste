import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SavoirFaire from "@/components/SavoirFaire";
import Galerie from "@/components/Galerie";
import MaitreArtisan from "@/components/MaitreArtisan";
import ConfigurateurBois from "@/components/ConfigurateurBois";
import Temoignages from "@/components/Temoignages";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <SavoirFaire />
      <Galerie />
      <MaitreArtisan />
      <ConfigurateurBois />
      <Temoignages />
      <Contact />
      <Footer />
    </main>
  );
}
