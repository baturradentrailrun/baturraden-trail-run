import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { badgeVariants } from "./ui/badge";

const CardPaket = () => {
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
          <p className="text-3xl font-black text-white opacity-90">Journey</p>
          <p className="w-9/12  font-semibold text-white opacity-70 ">
            7 Meter dengan Perjalanan yang menyenangkan
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
        <p className="text-black font-bold text-xl">Rp. 200.000</p>
      </div>
    </div>
  );
};

export default CardPaket;
