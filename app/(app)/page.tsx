import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Support from "@/components/sections/Support";
import Roadmap from "@/components/sections/Roadmap";
import Paket from "@/components/sections/Paket";
import DownloadApp from "@/components/sections/DownloadApp";
import Navbar from "@/components/Navbar";
import PeraturanLomba from "@/components/sections/PeraturanLomba";
import Tutorial from "@/components/sections/Tutorial";
import Rute from "@/components/sections/Rute";

export default async function Home() {
  return (
    <main>
      <Navbar />
      <Hero id="#" />
      <Support />
      <About id="about" />
      <Roadmap id="roadmap" />
      <Rute id="rute" />
      <PeraturanLomba id="peraturan-lomba" />
      <Paket id="paket" />

      <Tutorial id="tutorial" />
      <DownloadApp id="download-app" />
      <Footer id="kontak" />
    </main>
  );
}
