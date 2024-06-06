import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { badgeVariants } from "./ui/badge";
import { CardPaketProps } from "@/types";

const CardPaket: React.FC<CardPaketProps> = ({
  name,
  description,
  harga,
  index,
}) => {
  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(harga);

  const isLeft = index === 0;
  const backgroundColor = isLeft ? "#EA4335" : "#020D1D";
  const backgroundImage = isLeft ? "/treeanglered.svg" : "/treeangleblue.svg";
  const textColor = isLeft ? "text-[#EA4335]" : "text-blue-500";

  return (
    <div className="bg-white rounded-2xl shadow-lg lg:w-[240px] overflow-hidden">
      <div
        className="relative h-[262px] flex flex-col shadow-lg"
        style={{ backgroundColor, boxShadow: `0 0 10px ${backgroundColor}` }}
      >
        <Image
          src={backgroundImage}
          width={263}
          height={235}
          alt="aksen"
          objectFit="cover"
          objectPosition="center"
          className="absolute -bottom-5 blur-xl z-0"
        />
        <div className="z-10 text-center flex flex-col gap-5 justify-center items-center">
          <div
            className={cn(
              badgeVariants(),
              "capitalize font-bold rounded-full bg-white w-fit text-lg mx-auto mt-10",
              isLeft ? "text-[#EA4335]" : "text-[#1D4ED8]"
            )}
          >
            paket
          </div>
          <p className="text-3xl font-black text-white opacity-90">{name}</p>
          <p className="w-9/12 font-semibold text-white opacity-70">
            {description}
          </p>
        </div>
      </div>
      <div className="p-5 flex justify-center flex-col items-center lg:items-start">
        <div className="flex gap-2 items-end">
          <p className={cn("font-bold capitalize", textColor)}>Hanya</p>
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
