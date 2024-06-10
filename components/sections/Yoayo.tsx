import Image from "next/image";
import React from "react";

const Yoayo = () => {
  return (
    <section className="flex h-[90vh] flex-col lg:flex-row bg-[#00112B] relative padding-container overflow-hidden">
      <div className="self-end w-full ">
        <Image src={"/Phone.webp"} height={488} width={452} alt="yoayo" />
      </div>
      <Image
        src={"/siluet.webp"}
        height={9690.35}
        width={9504.25}
        alt="blur"
        className="absolute top-[-400px] left-[150px] z-15"
      />

      <div className="items-center w-full h-full z-20 flex justify-center">
        <div className="relative">
          <Image
            src={"/backsneaker.webp"}
            height={500}
            width={500}
            alt="back"
            className="mt-32"
          />
          <Image
            src={"/LeftLiquid.svg"}
            height={133}
            width={243}
            alt="back"
            className="-mt-[380px] ml-64"
          />
          <Image
            src={"/r-liq.svg"}
            height={133}
            width={243}
            alt="back"
            className="  -mt-[100px] -ml-32"
          />
          <Image
            src={"/frontsneaker.webp"}
            height={500}
            width={500}
            alt="front"
            className="-mt-[270px] -ml-[130px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Yoayo;
