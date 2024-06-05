import { londrina } from "@/app/fonts";
import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaTiktok,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa6";

function Footer() {
  return (
    <>
      <section className="bg-blue-700 flex flex-col justify-between padding-container py-16 text-white text-lg md:flex-row ">
        <div className="flex-1 text-center md:text-left">
          <div className={cn(londrina.className, "capitalize")}>
            <h2 className="text-4xl text-[#FF67F8]">Baturaden</h2>
            <h2 className="text-7xl">trail run</h2>
          </div>
          <p className="mt-5">
            Apa pun yang kamu lakukan, bersenang-senanglah. Olahraga bukan hanya
            cara yang sehat untuk tetap bugar, tetapi juga merupakan pereda
            stres yang baik
          </p>
        </div>

        <div className="border-t-2 md:border-l-2 border-slate-200 border-dashed mx-12 md:my-0 my-8"></div>

        <div className="flex flex-col flex-1 text-center md:text-left justify-between">
          <div>
            <h2>Untuk info lebih lanjut hubungi</h2>
            <div className="flex items-center">
              <Mail className="w-16 md:w-9" />
              <p className="md:ml-2 text-left">
                <b>baturradenfestival@gmail.com</b> atau kunjungi sosial media
                kami.
              </p>
            </div>
          </div>

          <div className="flex gap-2 py-4 justify-center md:justify-start">
            <Link
              href={"https://www.instagram.com/baturradenfestival"}
              target="_blank"
              className="bg-[#C310C6] px-4 py-2 md:px-6 md:py-4 rounded-full"
            >
              <FaInstagram className="md:text-2xl" />
            </Link>
            <Link
              href={"https://tiktok.com/@baturradenfestival"}
              target="_blank"
              className="bg-[#C310C6] px-4 py-2 md:px-6 md:py-4 rounded-full"
            >
              <FaTiktok className="md:text-2xl" />
            </Link>
            <Link
              href={"https://www.facebook.com/baturradenfestival/"}
              target="_blank"
              className="bg-[#C310C6] px-4 py-2 md:px-6 md:py-4 rounded-full"
            >
              <FaFacebook className="md:text-2xl" />
            </Link>
            <Link
              href={"https://wa.me/6289526894448"}
              target="_blank"
              className="bg-[#C310C6] px-4 py-2 md:px-6 md:py-4 rounded-full"
            >
              <FaWhatsapp className="md:text-2xl" />
            </Link>
            <Link
              href={"https://www.youtube.com/@baturradenfestival"}
              target="_blank"
              className="bg-[#C310C6] px-4 py-2 md:px-6 md:py-4 rounded-full"
            >
              <FaYoutube className="md:text-2xl" />
            </Link>
          </div>
          <p className="opacity-60">
            All Rights reserved @baturradentrailrun Community 2024
          </p>
        </div>
      </section>
    </>
  );
}

export default Footer;
