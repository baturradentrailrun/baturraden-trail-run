import Image from "next/image";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import CardInfoEvent from "../CardInfoEvent";
import getRoadmap from "@/sanity/fetch";

const Roadmap = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#004FC7] to-[#013E9C] flex justify-between h-[463px]">
      <Image
        src={"/2024.png"}
        width={596}
        height={136}
        alt="2024"
        className="absolute left-0 top-[-76px] hidden lg:block"
      />
      <div className="padding-container py-20 text-white ">
        <h2 className="font-bold text-3xl mb-5 mt-10">Roadmap ⏰</h2>
        <p className="w-9/12 mb-10">
          Nantikan keseruan bareng kita dan jangan lupa catat tanggal asik kita.
        </p>
        <Link href={"#"} className={cn(buttonVariants(), "capitalize")}>
          Info lanjut hubungi
        </Link>
      </div>
      <div className="relative">
        <Image
          src={"/roadmaplegend.svg"}
          width={783}
          height={329}
          alt="roadmap-map  "
          className=""
        />
        <div className=" absolute  bottom-10">
          <CardInfoEvent />
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
