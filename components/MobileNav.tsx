"use client";
import React from "react";
import { motion } from "framer-motion";
import { menuSlide, slide } from "@/constant/anim";
import { NAVBAR } from "@/constant";
import Link from "next/link";
import Curve from "./Curve";
import CustomButton from "./CustomButton";
import { Phone } from "lucide-react";

interface MobileNavProps {
  closeMenu: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ closeMenu }) => {
  return (
    <>
      <motion.div
        variants={menuSlide}
        animate="enter"
        exit="exit"
        initial="initial"
        className="float-end flex min-h-screen w-9/12 flex-col items-start gap-5 bg-blue-700 p-5 pt-20 "
      >
        <Curve />
        <p className="w-full border-b-2 border-blue-100 text-[10px] font-bold uppercase leading-[20px] text-white">
          navigasi
        </p>
        {NAVBAR.map((item, index) => (
          <motion.div
            custom={index}
            variants={slide}
            animate="enter"
            exit="exit"
            initial="initial"
            key={index}
            className="text-xl font-bold text-white transition duration-200 ease-in-out hover:font-medium dark:text-white dark:hover:text-slate-100"
          >
            <Link
              href={item.path}
              className="flex items-center gap-3 normal-case"
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          </motion.div>
        ))}
        <CustomButton
          href="#kontak"
          variants={"kontak"}
          roundedFull
          className="flex w-full justify-center gap-3 items-center hover:text-destructive-foreground"
        >
          <Phone size={17} />
          Kontak
        </CustomButton>
      </motion.div>
    </>
  );
};

export default MobileNav;
