import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import KategoriEvent from "@/components/sections/KategoriEvent";
import Support from "@/components/sections/Support";
import Roadmap from "@/components/sections/Roadmap";
import Rute from "@/components/sections/Rute";
import Paket from "@/components/sections/Paket";
import DownloadApp from "@/components/sections/DownloadApp";
import UnderDevelopment from "@/components/sections/UnderDevelopment";
import RunWithView from "@/components/sections/RunWithView";

export default async function Home() {
  return (
    <main>
      {/* <UnderDevelopment /> */}
      <Hero id="#" />
      <Support />
      <About id="informasi-event" />
      <Roadmap />
      <Rute />
      <KategoriEvent />
      <Paket id="kategori-event" />
      <RunWithView />
      <DownloadApp id="download-app" />
      <Footer id="kontak" />
    </main>
  );
}
