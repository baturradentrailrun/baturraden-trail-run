import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { IoIosInformationCircle } from "react-icons/io";
import { buttonVariants } from "../ui/button";
import Image from "next/image";

function DownloadApp() {
  return (
    <>
      <section className="padding-container py-32 md:flex">
        <div className="space-y-8 text-sm flex-1 flex flex-col justify-between">
          <p>
            Aplikasi YoAyo diciptakan tidak hanya untuk para pelari profesional,
            tetapi juga untuk kamu yang sedang memulai gaya hidup sehat.
          </p>
          <div className="flex gap-2 text-white">
            <div className="flex gap-2  bg-black px-5 py-2 rounded-lg border-4 border-slate-600">
              <Image
                src={"playstore.svg"}
                width={30}
                height={30}
                alt="playstore"
              />
              <div>
                <p>GET IT ON</p>
                <p className="font-bold">Google Play</p>
              </div>
            </div>
            <div className="flex gap-4 text-white bg-black px-5 py-2 rounded-lg border-4 border-slate-600">
              <Image
                src={"appstore.svg"}
                width={30}
                height={30}
                alt="appstore"
              />
              <div>
                <p>GET IT ON</p>
                <p className="font-bold">Google Play</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-2 md:border-l-2 border-slate-200 border-dashed mx-12 md:my-0 my-8"></div>

        <div className="space-y-8 flex-1">
          <div className="space-y-2">
            <p className="text-[#003E9C]">Untuk Pelari dan Semua Orang</p>
            <p className="text-2xl font-bold">Booking Trail Run</p>
          </div>
          <p>
            Daftar sekarang juga dan dapatkan paket lengkat festival olahraga
            kamu.
          </p>
          <Link
            href={"#"}
            className={cn(
              buttonVariants({ variant: "whatsapp" }),
              "bg-[#003E9C] capitalize flex gap-2 items-center w-fit"
            )}
          >
            Info lebih lanjut
            <IoIosInformationCircle className="text-xl" />
          </Link>
        </div>
      </section>
    </>
  );
}

export default DownloadApp;
