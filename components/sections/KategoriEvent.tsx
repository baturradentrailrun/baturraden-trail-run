import React from "react";
import CustomButton from "../CustomButton";
import { FaArrowRight } from "react-icons/fa";
import { VideoComponent } from "../video-comonent";

const KategoriEvent = () => {
  return (
    <div className="bg-slate-950 padding-container flex lg:justify-between flex-col items-center justify-center md:flex-row lg:py-20 py-10 md:py-16  gap-8">
      <div className="text-white">
        <h1 className="font-bold text-3xl text-white ">
          Cara Mendaftar Aplikasi Yoayo 📱
        </h1>
        <p className="lg:w-7/12 my-5">
          Temukan langkah-langkah mudah untuk mendaftar aplikasi Yoayo dan mulai
          menikmati manfaatnya sekarang juga!
        </p>
        <CustomButton
          href="#download-app"
          variants={"default"}
          className="w-full md:w-fit flex justify-center items-center gap-2"
          roundedFull
        >
          Unduh Aplikasi <FaArrowRight />
        </CustomButton>
      </div>
      <div className="">
        <VideoComponent />
      </div>
    </div>
  );
};

export default KategoriEvent;
