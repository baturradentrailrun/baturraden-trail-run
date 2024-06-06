"use client";

import { NAVBAR } from "@/constant";
import Link from "next/link";
import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import MobileNav from "./MobileNav";
import { ModeToggle } from "./ModeToggle";
import Logo from "./Logo";
import Overlay from "./Overlay";

const Navbar: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScroll, setIsScroll] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  });

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <motion.nav
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`padding-container fixed top-0 z-20 w-full pt-4 ${
          isScroll
            ? "border-input shadow-md bg-blue-900 bg-opacity-10 pb-3 backdrop-blur-3xl transition-all duration-500 ease-in-out"
            : ""
        }`}
      >
        <div className="max-container flex w-full justify-between items-center">
          <Logo />
          <ul className="hidden gap-5 lg:flex items-center">
            <ModeToggle />
            {NAVBAR.map((item, index) => (
              <li
                key={index}
                className="text-sm text-white transition duration-200 ease-in-out hover:font-medium dark:text-white"
              >
                <Link href={item.path} className="normal-case">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-5 lg:hidden">
            <div
              className={`z-40 rounded-full text-blue-700 ${
                isOpen
                  ? "text-white transition-all duration-200 ease-in-out"
                  : "text-white transition-all delay-300"
              }`}
            >
              <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 z-30 w-full">
          <AnimatePresence mode="wait">
            {isOpen && (
              <>
                <Overlay closeMenu={closeMenu} />
              </>
            )}
          </AnimatePresence>
        </div>
        <div className="absolute right-0 top-0 z-30 w-full">
          <AnimatePresence mode="wait">
            {isOpen && (
              <>
                <MobileNav closeMenu={closeMenu} />
              </>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
