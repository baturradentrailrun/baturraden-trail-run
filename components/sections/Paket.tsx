import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { BsInstagram } from "react-icons/bs";
import { buttonVariants } from "../ui/button";
import CustomButton from "../CustomButton";

const Paket = () => {
  return (
    <div className="bg-[#F2F2F2] padding-container flex justify-between items-center py-10">
      <div className="w-full"></div>
      <div className="w-full flex flex-col gap-5">
        <h2 className="text-slate-900 text-3xl font-bold">Sesuaikan larimu!</h2>
        <p className="text-slate-900">
          Mulai dari yang terdekat sedekat hati sampai finish terjauh, kami
          hadirkan dua paket yang sudah pasti cocok untuk semua insan berjiwa
          olahraga 🥰
        </p>
        <CustomButton href="#" variants={"instagram"} roundedFull>
          Unduh Manual <BsInstagram />
        </CustomButton>
      </div>
    </div>
  );
};

export default Paket;
