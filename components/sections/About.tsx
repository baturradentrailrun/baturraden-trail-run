import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import CustomButton from "../CustomButton";

const About = () => {
  return (
    <div className="flex justify-between overflow-hidden flex-col md:flex-row relative h-[500px] ">
      <div className="py-10 padding-container w-full  ">
        <h2 className="text-3xl font-bold my-5 ">Ayo Mlayu!</h2>
        <p className="md:w-10/12 mb-10 ">
          Rasakan sensasi petualangan Lari maraton dengan Baturaden Festival
          Lintasan terbaik di Banyumas runner! Temukan tantangan Anda berikutnya
          dengan mencari acara. Selami pilihan lomba lari yang telah dikurasi
          untuk memenuhi kebutuhan setiap level pelari, mulai dari penggemar
          lari kasual hingga ultramarathoner berpengalaman. Baik Anda ingin
          menjelajahi keindahan jalur lari lokal atau menaklukkan medan
          internasional, daftar acara kami yang komprehensif menempatkan dunia
          lari di ujung jari Anda.
        </p>
        <div className="flex gap-5 items-center">
          <CustomButton href="#" variants={"blue"} size={"lg"}>
            Daftar sekarang
          </CustomButton>
          <CustomButton href="#" size={"lg"}>
            Kunjungi sosmed
          </CustomButton>
        </div>
      </div>
      <div className="md:w-10/12 bg-[#003E9C] relative h-[496px] md:h-auto flex flex-col justify-between p-4 pb-20">
        <Image
          src={"/bunderan.svg"}
          width={639}
          height={496}
          alt="about image"
          className="absolute right-[-100px] md:top-0"
        />
        <Image
          src={"/bunderan2.svg"}
          width={639}
          height={496}
          alt="about image"
          className="absolute bottom-0 left-[-100px]"
        />
        <Image
          src={"/aboutimage.png"}
          width={675}
          height={496}
          alt="about image"
          className="absolute -left-24 md:top-1/4"
        />
        <Image
          src={"/aboutvector.svg"}
          width={527}
          height={496}
          alt="about image"
          className="absolute bottom-0 right-0"
        />
        <div className="flex-1"></div>
        <Button
          className="relative z-10 mx-auto font-bold w-full md:w-auto"
          size={"lg"}
        >
          Kunjungi Sosmed
        </Button>
      </div>
    </div>
  );
};

export default About;
