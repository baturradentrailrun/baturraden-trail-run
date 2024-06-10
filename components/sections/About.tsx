import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import CustomButton from "../CustomButton";

const About = ({ id }: { id: string }) => {
  return (
    <div
      id={id}
      className="flex justify-between overflow-hidden flex-col md:flex-row relative "
    >
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
      </div>
      <div className="md:w-10/12 bg-[#003E9C] relative h-[380px] lg:h-[500px] md:h-auto flex flex-col justify-between p-4 pb-20 order-first md:order-last overflow-hidden md:overflow-visible">
        <Image
          src={"/bunderan.svg"}
          width={639}
          height={496}
          alt="about image"
          className="absolute right-[-100px] top-0"
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
          className="absolute -left-8 top-12 scale-110 md:top-1/2 md:scale-125 lg:scale-100 lg:top-8"
        />
        <Image
          src={"/aboutvector.svg"}
          width={527}
          height={496}
          alt="about image"
          className="absolute bottom-0 right-0"
        />
      </div>
    </div>
  );
};

export default About;
