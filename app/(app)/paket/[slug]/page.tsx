"use client";
import { Suspense, useState, useEffect } from "react";
import { PortableTextBlock } from "next-sanity";
import { useRouter, notFound } from "next/navigation";
import { Paket } from "@/types";
import { getPaketBySlug } from "@/sanity/fetch";
import CustomPortableText from "@/components/PortableTextComponent";

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/sections/Footer";
import { buttonVariants } from "@/components/ui/button";
import { BadgePercent, ChevronLeft } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { Metadata, ResolvingMetadata } from "next";
interface PaketPageProps {
  params: {
    slug: string;
  };
}

export default function PaketPage({ params }: PaketPageProps) {
  const router = useRouter();
  const { slug } = params;
  const [paket, setPaket] = useState<Paket | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getPaketBySlug(slug);
        if (!data) {
          return notFound();
        }
        setPaket(data);
      } catch (err) {
        setError("Error loading paket");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return (
      <div className="text-center p-10">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-300 rounded mb-4"></div>
          <div className="h-6 bg-gray-300 rounded mb-4"></div>
          <div className="h-6 bg-gray-300 rounded mb-4"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center py-10">{error}</div>;
  }

  if (!paket) {
    return <div className="text-center py-10">Paket tidak ditemukan</div>;
  }

  const { name, harga, description, blockContent } = paket;
  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(harga);
  return (
    <div className="container mx-auto py-10 padding-container min-h-screen ">
      <article className="lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between pb-3 border-b mb-3 ">
          <div className="w-full">
            <h1 className="lg:text-3xl lg:w-5/12 font-bold text-md mb-1 lg:mb-3">
              Informasi lebih detail seputar paket {name}
            </h1>
            <div className="text-slate-500 text-xs">{description}</div>
          </div>
          <div className="lg:w-5/12">
            <Card className="w-full mt-5 lg:mt-0 shadow-lg">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Paket {name}</CardTitle>
                    <CardDescription>Harga paket {name}</CardDescription>
                  </div>
                  <BadgePercent size={30} />
                </div>
              </CardHeader>
              <CardContent className="text-3xl font-bold">
                {formattedPrice}
              </CardContent>
            </Card>
          </div>
        </div>
        <div>
          {blockContent?.length && (
            <CustomPortableText
              className="w-full max-w-2xl text-slate-900 dark:text-white"
              value={blockContent as PortableTextBlock[]}
            />
          )}
        </div>
      </article>
    </div>
  );
}
