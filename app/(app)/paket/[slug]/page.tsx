"use client";
import { fetchPaketBySlug } from "@/sanity/fetch";
import { Paket } from "@/types";
import { PortableText } from "@portabletext/react";
import Components from "@/components/PortableTextComponent";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";

interface PaketPageProps {
  params: {
    slug: string;
  };
}

const PaketPage = ({ params }: PaketPageProps) => {
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
        const data = await fetchPaketBySlug(slug);
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
    return <div className="text-center py-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-10">{error}</div>;
  }

  if (!paket) {
    return <div className="text-center py-10">Paket tidak ditemukan</div>;
  }

  const { name, harga, description, blockContent } = paket;

  return (
    <div className="w-full  p-4 lg:p-10">
      <div className="mb-5  w-full pb-5">
        <Button onClick={() => router.back()}>Kembali</Button>
      </div>
      <Card>
        <CardHeader>
          <h1 className="text-3xl font-bold mb-4">{name}</h1>
          <CardDescription>
            <p className="mb-2">{description}</p>
            <p className=" font-semibold mb-4">Harga: Rp. {harga}</p>
            <p className="capitalize font-bold text-lg mb-3 ">info paket :</p>
          </CardDescription>
          <CardContent>
            <div className=" dark:text-white text-slate-900">
              <PortableText value={blockContent} components={Components} />
            </div>
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
};

export default PaketPage;
