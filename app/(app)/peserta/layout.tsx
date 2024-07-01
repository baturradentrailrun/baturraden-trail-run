import Logo from "@/components/Logo";
import { ModeToggle } from "@/components/ModeToggle";
import Footer from "@/components/sections/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daftar Peserta",
  description: "Daftar peserta baturraden trail run 2024",
  keywords: ["daftar peserta", "perlombaan", "baturraden"],
  applicationName: "Baturaden Trail Run",
  metadataBase: new URL("https://baturradentrailrun.com"),
  openGraph: {
    title: "Peserta Baturraden Trail Run 2024",
    description: "Daftar peserta baturraden trail run 2024",
  },
};

export default function PaketLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <nav className="w-full flex justify-between items-center padding-container py-2 border-b  shadow-lg">
        <Logo />
        <ModeToggle />
      </nav>
      <div className="bg-slate-50 dark:bg-background">{children}</div>
      <Footer id="kontak" />
    </main>
  );
}
