import React from "react";
import { BsInstagram } from "react-icons/bs";
import CustomButton from "../CustomButton";
import CardPaket from "../CardPaket";
import { getPaket } from "@/sanity/fetch";
import { CardPaketProps } from "@/types";

const Paket = async ({ id }: { id: string }) => {
  const paket = await getPaket();

  paket.sort((a: CardPaketProps, b: CardPaketProps) => a.harga - b.harga);

  return (
    <div
      id={id}
      className="bg-[#F2F2F2] padding-container flex  lg:flex-row flex-col-reverse justify-between w-full py-10 gap-10 lg:gap-0"
    >
      <div className="w-full flex flex-col lg:flex-row justify-start gap-5 items-center border-t-2 lg:border-t-0 lg:border-r-2 border-dashed border-r-slate-500 pt-10 lg:pt-0">
        {paket.map((p: CardPaketProps, index: number) => (
          <div key={index}>
            <CardPaket
              name={p.name}
              description={p.description}
              harga={p.harga}
              index={index}
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
            href="#"
            variants={"instagram"}
            roundedFull
            className="w-full md:w-fit"
          >
            Unduh Manual <BsInstagram />
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Paket;
