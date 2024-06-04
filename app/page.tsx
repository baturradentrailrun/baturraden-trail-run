import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import KategoriEvent from "@/components/sections/KategoriEvent";
import Support from "@/components/sections/Support";
import getAllData from "../sanity/fetch";

export default async function Home() {
  const data = await getAllData();
  console.log(data);
  return (
    <main>
      <Hero />
      <Support />
      <About />
      <KategoriEvent />
    </main>
  );
}
