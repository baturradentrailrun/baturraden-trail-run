import Image from "next/image";
import React from "react";

function HeroBackround() {
  return (
    <>
      <Image
        src={"grain.svg"}
        alt="grain"
        width={30}
        height={30}
        className="absolute z-[2] w-full h-full"
      />
      <Image
        src={"edge1.svg"}
        alt="grain"
        width={80}
        height={80}
        className="absolute z-[3] top-0 left-0 w-36 lg:w-60"
      />
      <Image
        src={"edge2.svg"}
        alt="grain"
        width={80}
        height={80}
        className="absolute z-[3] top-5 -right-5 md:top-0 md:right-0 w-36 md:w-60 -rotate-[40deg] md:rotate-0"
      />
      <Image
        src={"edge3.svg"}
        alt="grain"
        width={80}
        height={80}
        className="absolute z-[3] -bottom-3 right-0 w-36 lg:w-60"
      />
      <Image
        src={"edge4.svg"}
        alt="grain"
        width={80}
        height={80}
        className="absolute z-[3] bottom-0 left-0 w-36 lg:w-60"
      />
      <Image
        src={"center.svg"}
        alt="grain"
        width={100}
        height={100}
        className="absolute z-[2] w-screen h-screen scale-[4] lg:scale-[2.5]"
      />
      <Image
        src={"fluid.svg"}
        alt="grain"
        width={30}
        height={30}
        className="absolute z-[2] w-full h-full scale-[1.4] md:scale-[1] rotate-90 lg:rotate-0 lg:scale-[1] lg:-translate-x-8 lg:translate-y-8"
      />

      <Image
        src={"petir.svg"}
        alt="grain"
        width={30}
        height={30}
        className="absolute z-[2] w-full h-full scale-[1.4] md:scale-[1]  lg:scale-[0.4] translate-y-28"
      />
    </>
  );
}

export default HeroBackround;
