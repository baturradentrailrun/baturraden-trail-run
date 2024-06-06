import React from "react";
import { BsInstagram } from "react-icons/bs";
import CustomButton from "../CustomButton";
import CardPaket from "../CardPaket";

const Paket = () => {
  return (
    <div className="bg-[#F2F2F2] padding-container flex  lg:flex-row flex-col-reverse justify-between w-full py-10 gap-10 lg:gap-0">
      <div className="w-full flex flex-col lg:flex-row justify-start gap-5 items-center border-t-2 lg:border-r-2 border-dashed border-r-slate-500 pt-10 lg:pt-0">
        <CardPaket />
        <CardPaket />
      </div>
      <div className="w-full    flex items-center   justify-center   ">
        <div className=" lg:w-9/12 lg:mx-auto flex flex-col gap-5">
          <h2 className="text-slate-900 text-3xl font-bold text-left w-fit">
            Sesuaikan larimu!
          </h2>
          <p className="text-slate-900 ">
            Mulai dari yang terdekat sedekat hati sampai finish terjauh, kami
            hadirkan dua paket yang sudah pasti cocok untuk semua insan berjiwa
            olahraga 🥰
          </p>
          <CustomButton href="#" variants={"instagram"} roundedFull>
            Unduh Manual <BsInstagram />
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Paket;
