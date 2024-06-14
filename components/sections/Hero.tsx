import { londrina, plusJakartaSans } from "@/app/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";

import React from "react";
import HeroBackround from "../HeroBackround";
import Link from "next/link";

const Hero = ({ id }: { id: string }) => {
  return (
    <header
      id={id}
      className="bg-[url('/bg.jpg')] w-full bg-center bg-no-repeat bg-cover"
    >
      <div className="relative overflow-hidden bg-blue-700 h-screen bg-opacity-90">
        <HeroBackround />
        <div className="flex justify-center items-center h-full gap-4 relative z-[2] mt-12">
          <div
            className={cn(
              londrina.className,
              "capitalize text-white text-center"
            )}
          >
            <p className="text-pink-400 font-bold text-xl tracking-wide">
              baturaden
            </p>
            <h1 className="text-8xl">Trail Run</h1>
            <div className="w-full">
              <p className={cn(plusJakartaSans.className, "lowercase text-xs")}>
                part of
              </p>
              <p>baturraden</p>
              <p className="text-3xl text-[#97DE00]">festival</p>
              <p className={cn(plusJakartaSans.className, "text-sm mt-5")}>
                Registrasi melalui aplikasi :
              </p>
              <div className="flex gap-2 text-white mt-5">
                <Link
                  href={
                    "https://play.google.com/store/apps/details?id=asia.yoayo.yoayo&pcampaignid=web_share"
                  }
                  target="_blank"
                  className="flex gap-2  bg-black px-5 py-2 rounded-xl border-4 border-slate-600"
                >
                  <Image
                    src={"playstore.svg"}
                    width={20}
                    height={20}
                    alt="playstore"
                  />
                  <div>
                    <p className="text-sm">GET IT ON</p>
                    <p className="font-bold">Google Play</p>
                  </div>
                </Link>
                <Link
                  href={
                    "https://apps.apple.com/us/app/yoayo-active-community/id1481334742"
                  }
                  target="_blank"
                  className="flex gap-4 text-white bg-black px-5 py-2 rounded-xl border-4 border-slate-600"
                >
                  <Image
                    src={"appstore.svg"}
                    width={20}
                    height={20}
                    alt="appstore"
                  />
                  <div>
                    <p className="text-sm">GET IT ON</p>
                    <p className="font-bold">App Store</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Hero;
