import React from "react";

import { CarouselImage } from "../Carousel";
import CustomButton from "../CustomButton";
import { FaArrowRightLong } from "react-icons/fa6";

const KategoriEvent = () => {
  return (
    <div className="bg-slate-950 padding-container flex justify-between flex-col md:flex-row lg:py-20 py-10 md:py-16  gap-8">
      <div className="text-white">
        <h1 className="font-bold text-3xl text-white ">
          Pesan peduli sehat 💌
        </h1>
        <p className="lg:w-7/12 my-5">
          Kami peduli untuknya kami hadirkan Baturaden Trail Run, untuknya kita
          membangun masa depan yang lebih sehat 🤩.
        </p>
        <CustomButton
          href="#download-app"
          variants={"default"}
          className="w-full md:w-fit flex justify-center items-center gap-2"
          roundedFull
        >
          Unduh Aplikasi <FaArrowRightLong />
        </CustomButton>
      </div>
      <div className="">
        <CarouselImage />
      </div>
    </div>
  );
};

export default KategoriEvent;
