import { getPaketBySlug } from "@/sanity/fetch";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  { params: { slug } }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const paket = await getPaketBySlug(slug);
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: paket?.name,
    description: paket?.description,
    openGraph: {
      images: previousImages,
    },
  };
}
