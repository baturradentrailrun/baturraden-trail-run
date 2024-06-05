import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import KategoriEvent from "@/components/sections/KategoriEvent";
import Support from "@/components/sections/Support";
import getAllData from "../sanity/fetch";
import Roadmap from "@/components/sections/Roadmap";
import Rute from "@/components/sections/Rute";

export default async function Home() {
  return (
    <main>
      <Hero />
      <Support />
      <About />
      <Roadmap />
      <Rute />
      <KategoriEvent />
    </main>
  );
}
