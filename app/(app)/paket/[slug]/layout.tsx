import Logo from "@/components/Logo";
import { ModeToggle } from "@/components/ModeToggle";
import Footer from "@/components/sections/Footer";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getPaketBySlug } from "@/sanity/fetch";
import { ChevronLeft } from "lucide-react";
import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";

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
      <nav className="w-full flex justify-between items-center padding-container py-2 border-b mb-5 shadow-lg">
        <Logo />
        <ModeToggle />
      </nav>
      <div>
        <Breadcrumb className="padding-container">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Beranda</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{params.slug}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      {children}
      <Footer id="kontak" />
    </main>
  );
}
