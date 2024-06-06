import Image from "next/image";
import React from "react";
import CardInfoEvent from "../CardInfoEvent";
import { BsWhatsapp } from "react-icons/bs";
import CustomButton from "../CustomButton";

const Roadmap = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#004FC7] to-[#013E9C] flex flex-col lg:flex-row justify-between min-h-[463px]">
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
        <CustomButton
          href="#"
          variants={"whatsapp"}
          roundedFull
          className="w-full md:w-fit"
        >
          Info lanjut hubungi
          <BsWhatsapp />
        </CustomButton>
      </div>
      <div className="relative">
        <Image
          src={"/roadmaplegend.svg"}
          width={783}
          height={329}
          alt="roadmap-map"
          className="absolute right-0 -top-10 lg:static z-0"
        />
        <div className="lg:absolute relative pt-32 lg:bottom-10 z-10">
          <CardInfoEvent />
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
