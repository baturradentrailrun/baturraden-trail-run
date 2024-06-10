import Image from "next/image";
import React from "react";

const Yoayo = () => {
  return (
    <section className="flex  flex-col-reverse lg:flex-row bg-[#00112B] relative padding-container pt-10 overflow-hidden">
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
              Bergabunglah sekarang dan mulailah perjalanan olahraga Anda dengan
              Yoayo!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Yoayo;
