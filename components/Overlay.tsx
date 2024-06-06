import React from "react";
import { motion } from "framer-motion";
import { overlay } from "@/constant/anim";
const Overlay = () => {
  return (
    <motion.div
      variants={overlay}
      animate="enter"
      exit="exit"
      initial="initial"
      className="z-0 fixed  bg-slate-800  backdrop-blur-md bg-opacity-10 w-full top-0 h-full"
    ></motion.div>
  );
};

export default Overlay;
