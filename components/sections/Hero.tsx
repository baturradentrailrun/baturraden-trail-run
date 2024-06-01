import { londrina, plusJakartaSans } from "@/app/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";

import React from "react";

const Hero = () => {
  return (
    <header className="relative overflow-hidden bg-blue-700 h-screen">
      <Image
        src={"/heroimage.png"}
        width={1442}
        height={731.23}
        alt="hero image"
        objectFit="contain"
        objectPosition="center"
        className="absolute z-[1] top-0 left-0 w-full h-full"
      />
      <div className="flex justify-center items-center h-full gap-4 relative z-[2] mt-12">
        <div
          className={cn(
            londrina.className,
            "capitalize text-white text-center"
          )}
        >
          <p className="text-pink-400 font-bold text-xl tracking-wide">
            baturaden
          </p>
          <h1 className="text-8xl">Trail Run</h1>
          <div className="w-full">
            <p className={cn(plusJakartaSans.className, "lowercase text-xs")}>
              part of
            </p>
            <p>baturaden</p>
            <p className="text-3xl text-[#97DE00]">festival</p>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Hero;
