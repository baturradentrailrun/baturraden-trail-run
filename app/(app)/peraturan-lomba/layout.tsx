import Logo from "@/components/Logo";
import { ModeToggle } from "@/components/ModeToggle";
import Footer from "@/components/sections/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Peraturan Perlombaan",
  description: "Baca dan cermati baik-baik peraturan perlombaan!",
  keywords: ["peraturan", "perlombaan", "baturraden"],
  applicationName: "Baturaden Trail Run",
  metadataBase: new URL("https://baturradentrailrun.com"),
  openGraph: {
    title: "Peraturan Perlombaan",
    description: "Baca dan cermati baik-baik peraturan perlombaan!",
  },
};

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
