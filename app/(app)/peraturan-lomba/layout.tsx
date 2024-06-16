import Logo from "@/components/Logo";
import { ModeToggle } from "@/components/ModeToggle";
import Footer from "@/components/sections/Footer";
import type { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: "Peraturan Perlombaan",
    description: "Baca dan cermati baik-baik peraturan perlombaan!",
    openGraph: {
      images: previousImages,
    },
  };
}

export default function PaketLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <nav className="w-full flex justify-between items-center padding-container py-2 border-b mb-5 shadow-lg">
        <Logo />
        <ModeToggle />
      </nav>
      {children}
      <Footer id="kontak" />
    </main>
  );
}