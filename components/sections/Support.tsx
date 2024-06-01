import { imageSupport } from "@/constant";
import Image from "next/image";
import React from "react";

const Support = () => {
  return (
    <div className="bg-slate-950 text-white  padding-container py-10">
      <div className="max-container padding-container flex justify-center items-center flex-col">
        <p className="capitalize">wujudkan generasi sehat bersama</p>
        <div className="flex justify-around gap-5">
          {imageSupport.map((item, index) => (
            <Image
              key={index}
              src={item.image}
              alt={item.alt}
              height={20}
              width={250}
              objectFit="contain"
              className="object-contain h-16"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Support;
