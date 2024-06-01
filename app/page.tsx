import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import KategoriEvent from "@/components/sections/KategoriEvent";
import Support from "@/components/sections/Support";

export default function Home() {
  return (
    <main>
      <Hero />
      <Support />
      <About />
      <KategoriEvent />
    </main>
  );
}
