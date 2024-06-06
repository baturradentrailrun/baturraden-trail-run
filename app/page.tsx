import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import KategoriEvent from "@/components/sections/KategoriEvent";
import Support from "@/components/sections/Support";
import Roadmap from "@/components/sections/Roadmap";
import Rute from "@/components/sections/Rute";
import Paket from "@/components/sections/Paket";
import DownloadApp from "@/components/sections/DownloadApp";

export default async function Home() {
  return (
    <main>
      <Hero id="#" />
      <Support />
      <About id="#informasi-event" />
      <Roadmap />
      <Rute />
      <KategoriEvent />
      <Paket id="#kategori-event" />
      <DownloadApp id="#download-app" />
      <Footer />
    </main>
  );
}
