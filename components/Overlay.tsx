import React from "react";
import { motion } from "framer-motion";
import { overlay } from "@/constant/anim";

interface OverlayProps {
  closeMenu: () => void;
}

const Overlay: React.FC<OverlayProps> = ({ closeMenu }) => {
  return (
    <motion.div
      variants={overlay}
      animate="enter"
      exit="exit"
      initial="initial"
      className="fixed inset-0 bg-slate-800 min-h-screen backdrop-blur-md bg-opacity-10 "
      onClick={closeMenu}
    ></motion.div>
  );
};

export default Overlay;
