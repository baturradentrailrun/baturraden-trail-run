"use client";
import React, { useEffect, useState } from "react";
import { BsInstagram } from "react-icons/bs";
import CustomButton from "../CustomButton";
import CardPaket from "../CardPaket";
import { getPaket } from "@/sanity/fetch";
import { CardPaketProps } from "@/types";
import { LucideDownloadCloud } from "lucide-react";

interface PaketProps {
  id: string;
}

const Paket: React.FC<PaketProps> = ({ id }) => {
  const [paket, setPaket] = useState<CardPaketProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  console.log(paket);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getPaket();
        data.sort((a: CardPaketProps, b: CardPaketProps) => a.harga - b.harga);
        setPaket(data);
      } catch (err) {
        setError("Error loading paket");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-10">{error}</div>;
  }

  return (
    <div
      id={id}
      className="bg-[#F2F2F2] padding-container flex lg:flex-row flex-col-reverse justify-between w-full py-10 gap-10 lg:gap-0"
    >
      <div className="w-full flex flex-col lg:flex-row justify-start gap-5 items-center border-t-2 lg:border-t-0 lg:border-r-2 border-dashed border-r-slate-500 lg:pr-5 pt-10 lg:pt-0">
        {paket.map((p: CardPaketProps, index: number) => (
          <div key={index}>
            <CardPaket
              name={p.name}
              description={p.description}
              harga={p.harga}
              index={index}
              slug={p.slug?.current ? { current: p.slug.current } : undefined}
            />
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="lg:w-9/12 lg:mx-auto flex flex-col gap-5">
          <h2 className="text-slate-900 text-3xl font-bold text-left w-fit">
            Sesuaikan larimu!
          </h2>
          <p className="text-slate-900">
            Mulai dari yang terdekat sedekat hati sampai finish terjauh, kami
            hadirkan dua paket yang sudah pasti cocok untuk semua insan berjiwa
            olahraga 🥰
          </p>
          <CustomButton
            href="https://drive.google.com/file/d/1YiiMzA73_tBLSTU082LTBnaaJ_0g4hcg/view?usp=sharing"
            variants={"default"}
            roundedFull
            className="w-full flex items-center gap-3 md:w-fit"
          >
            Unduh Manual <LucideDownloadCloud size={20} />
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Paket;
