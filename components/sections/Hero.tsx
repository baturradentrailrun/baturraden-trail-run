import { londrina, plusJakartaSans } from "@/app/fonts";
import { cn } from "@/lib/utils";
import React from "react";
import HeroBackround from "../HeroBackround";
import CustomButton from "../CustomButton";
import { SiAppstore } from "react-icons/si";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { Badge } from "../ui/badge";
import { MapPinned } from "lucide-react";

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
              <Badge
                className={cn(
                  plusJakartaSans.className,
                  "lowercase text-xs",
                  "bg-pink-500 text-white "
                )}
              >
                part of
              </Badge>
              <p>baturraden</p>
              <p className="text-3xl text-[#97DE00]">festival</p>
              <p
                className={cn(
                  plusJakartaSans.className,
                  "text-sm mt-32 lg:mt-10 font-semibold"
                )}
              >
                Registrasi melalui aplikasi :
              </p>
              <div className="flex gap-2 flex-col md:flex-row  text-white mt-5 justify-center">
                <CustomButton
                  className="rounded-full flex gap-4 items-center"
                  _blank
                  href="https://play.google.com/store/apps/details?id=asia.yoayo.yoayo&pcampaignid=web_share"
                >
                  <IoLogoGooglePlaystore size={20} />
                  Playstore
                </CustomButton>
                <CustomButton
                  className="rounded-full flex gap-4 items-center"
                  _blank
                  href="https://apps.apple.com/us/app/yoayo-active-community/id1481334742"
                >
                  <SiAppstore size={20} />
                  AppStore
                </CustomButton>
              </div>
              <CustomButton
                className="rounded-full w-full md:w-fit mx-auto mt-5 flex gap-4 items-center"
                _blank
                href="#"
              >
                <MapPinned size={20} />
                Download GPX
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Hero;
