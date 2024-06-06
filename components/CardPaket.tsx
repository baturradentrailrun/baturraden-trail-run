import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { badgeVariants } from "./ui/badge";
import { CardPaketProps } from "@/types";

const CardPaket: React.FC<CardPaketProps> = ({ name, description, harga }) => {
  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(harga);

  return (
    <div className="bg-white rounded-2xl shadow-lg lg:w-[240px] overflow-hidden">
      <div className="relative h-[262px] flex flex-col bg-[#EA4335] shadow-lg shadow-[#EA4335]">
        <Image
          src={"/treeangleblue.svg"}
          width={263}
          height={235}
          alt="aksen"
          className="absolute -bottom-4 blur-xl  z-0"
        />
        <div className="z-10 text-center flex flex-col gap-5 justify-center items-center">
          <div
            className={cn(
              badgeVariants(),
              "capitalize font-bold rounded-full bg-white w-fit text-lg mx-auto mt-10 text-[#EA4335]"
            )}
          >
            paket
          </div>
          <p className="text-3xl font-black text-white opacity-90">{name}</p>
          <p className="w-9/12  font-semibold text-white opacity-70 ">
            {description}
          </p>
        </div>
      </div>
      <div className="p-5 flex justify-center flex-col items-center lg:items-start">
        <div className="flex gap-2 items-end">
          <p className=" font-bold capitalize text-[#EA4335]">Hanya</p>
          <Image
            src={"/arrowharga.svg"}
            width={62.5}
            height={1}
            objectFit="contain"
            alt="arrow"
          />
        </div>
        <p className="text-black font-bold text-xl">{formattedPrice}</p>
      </div>
    </div>
  );
};

export default CardPaket;
