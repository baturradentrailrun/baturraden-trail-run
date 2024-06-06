import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import KategoriEvent from "@/components/sections/KategoriEvent";
import Support from "@/components/sections/Support";
import Roadmap from "@/components/sections/Roadmap";
import Rute from "@/components/sections/Rute";
import Paket from "@/components/sections/Paket";

export default async function Home() {
  return (
    <main className="max-container">
      <Hero />
      <Support />
      <About />
      <Roadmap />
      <Rute />
      <KategoriEvent />
      <Paket />
      <Footer />
    </main>
  );
}
