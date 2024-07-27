import { poppins } from "@/app/fonts";
import Logo from "@/components/Logo";
import { ModeToggle } from "@/components/ModeToggle";
import Footer from "@/components/sections/Footer";
import { cn } from "@/lib/utils";
import { getPaketBySlug } from "@/sanity/fetch";
import type { Metadata, ResolvingMetadata } from "next";

interface PaketPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata(
  { params }: PaketPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = params;
  const paket = await getPaketBySlug(slug);
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: paket?.name || "Baturaden Trail Run",
    description:
      paket?.description ||
      "Wujudkan generasi sehat bersama Baturaden Trail Run",
    openGraph: {
      images: previousImages,
    },
  };
}

export default function PaketLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: any;
}>) {
  return (
    <main>
      <nav
        className={cn(
          poppins.className,
          "w-full flex justify-between items-center padding-container py-2 border-b mb-5 shadow-lg"
        )}
      >
        <Logo />
        <ModeToggle />
      </nav>

      {children}
      <Footer id="kontak" />
    </main>
  );
}
