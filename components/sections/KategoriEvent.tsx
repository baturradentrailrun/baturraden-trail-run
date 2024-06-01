import React from "react";
import { Button } from "../ui/button";
import { CarouselImage } from "../Carousel";

const KategoriEvent = () => {
  return (
    <div className="bg-slate-950 padding-container flex justify-between py-20">
      <div className="text-white">
        <h1 className="font-bold text-4xl text-white ">Trail run</h1>
        <p className="w-7/12 my-5">
          Jelajahi pesona alamt Baturaden. Lintasi hutan rimbun, sungai jernih,
          dan perbukitan hijau. Pemandangan menakjubkan menanti di setiap
          tikungan
        </p>
        <Button>Daftar melalui yoayo</Button>
      </div>
      <div className="">
        <CarouselImage />
      </div>
    </div>
  );
};

export default KategoriEvent;
