import React from "react";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import Image from "next/image";

const Rute = () => {
  return (
    <div className="bg-slate-900 relative flex lg:justify-between flex-col lg:flex-row">
      <div className="relative">
        <h1
          className={cn(buttonVariants(), "rounded-full absolute top-5 left-5")}
        >
          Buka di map
        </h1>
        <Image
          src={"/map1.png"}
          width={721}
          height={458}
          alt="image maps"
          className="w-full object-cover object-center"
        />
        <div className="py-10">
          <div className="flex flex-col items-center justify-center padding-container">
            <div className="flex gap-3 items-center flex-col lg:flex-row">
              <div className="text-xl font-bold text-white">
                Rute Offline Race <span className="text-yellow-600">7km</span>
              </div>
              <Badge className="rounded-full bg-white text-slate-950">
                Info rute
              </Badge>
            </div>
            <p className="text-white text-center p-5 lg:p-0">
              Taman Botani – Pringsewu Baturraden – Curug Bayan – Curug Jenggala
              – Pancuran 7 – Lokawisata Baturraden – Taman Botani
            </p>
          </div>
        </div>
      </div>
      <div className="relative">
        <h1
          className={cn(buttonVariants(), "rounded-full absolute top-5 left-5")}
        >
          Buka di map
        </h1>
        <Image
          src={"/map1.png"}
          width={721}
          height={458}
          alt="image maps"
          objectFit="cover"
          className="object-cover w-full"
        />
        <div className=" py-10">
          <div className="flex flex-col items-center justify-center padding-container">
            <div className="flex gap-3 items-center">
              <div className="text-xl font-bold text-white">
                Rute Offline Race <span className="text-yellow-600">7km</span>
              </div>
              <Badge className="rounded-full">Info rute</Badge>
            </div>
            <p className="text-white text-center">
              Taman Botani – Pringsewu Baturraden – Curug Bayan – Curug Jenggala
              – Pancuran 7 – Lokawisata Baturraden – Taman Botani
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rute;
