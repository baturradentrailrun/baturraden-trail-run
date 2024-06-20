import React from "react";
import CustomButton from "../CustomButton";
import { FaArrowRight } from "react-icons/fa";
import { VideoComponent } from "../video-comonent";
import Image from "next/image";

const Tutorial = ({ id }: { id: string }) => {
  return (
    <>
      <section
        id={id}
        className="flex  flex-col-reverse lg:flex-row bg-[#00112B] relative padding-container pt-10 overflow-hidden"
      >
        <div className="w-full lg:w-1/2 lg:self-end mx-auto">
          <Image src={"/Phone.webp"} height={488} width={452} alt="yoayo" />
        </div>
        <Image
          src={"/siluet.webp"}
          height={9690.35}
          width={9504.25}
          alt="blur"
          className="absolute top-[-400px] left-[150px] z-15"
        />

        <div className="w-full lg:w-1/2 flex-1 mb-10 lg:mb-0">
          <div className="items-center w-full h-full flex justify-start lg:justify-center">
            <div className="relative text-white">
              <h1 className="text-5xl font-bold text-start">Aplikasi Yoayo</h1>
              <p className="text-lg mt-4 lg:w-10/12">
                Temukan dan jadwalkan kegiatan olahraga dengan mudah menggunakan
                aplikasi Yoayo. Nikmati fitur-fitur seperti pencarian tempat
                olahraga, pembayaran yang aman, dan jadwal kegiatan yang
                terintegrasi.
              </p>
              <p className="text-lg mt-4 lg:w-10/12">
                Bergabunglah sekarang dan mulailah perjalanan olahraga Anda
                dengan Yoayo!
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-slate-950 padding-container flex lg:justify-between flex-col items-center justify-center md:flex-row lg:py-20 py-10 md:py-16  gap-8">
        <div className="text-white">
          <h1 className="font-bold text-3xl text-white ">
            Cara Mendaftar Aplikasi Yoayo 📱
          </h1>
          <p className="lg:w-7/12 my-5">
            Temukan langkah-langkah mudah untuk mendaftar aplikasi Yoayo dan
            mulai menikmati manfaatnya sekarang juga!
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
    </>
  );
};

export default Tutorial;
