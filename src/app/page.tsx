import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SavoirFaire from "@/components/SavoirFaire";
import Galerie from "@/components/Galerie";
import MaitreArtisan from "@/components/MaitreArtisan";
import ConfigurateurBois from "@/components/ConfigurateurBois";
import Matieres from "@/components/Matieres";
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
      <Matieres />
      <Temoignages />
      <Contact />
      <Footer />
    </main>
  );
}
