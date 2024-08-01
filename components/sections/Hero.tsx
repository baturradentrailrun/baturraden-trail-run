import { londrina, plusJakartaSans } from "@/app/fonts";
import { cn } from "@/lib/utils";
import React from "react";
import HeroBackround from "../HeroBackround";
import CustomButton from "../CustomButton";
import { SiAppstore } from "react-icons/si";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { Badge } from "../ui/badge";
import { FileDown, MapPinned } from "lucide-react";
import { getGpx } from "@/sanity/fetch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";
import { Button } from "../ui/button";

const Hero = async ({ id }: { id: string }) => {
  const gpx = await getGpx();
  console.log(gpx);
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
              <div className="my-10 flex justify-center">
                {gpx && (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button className="flex items-center gap-4 rounded-full justify-center">
                        <MapPinned size={20} /> Download File GPX
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel className="text-center">
                        Download File GPX
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      {gpx.map((g, index) => (
                        <Link key={index} href={`${g.url}?dl=`}>
                          <DropdownMenuItem className="flex gap-3 items-center hover:dark:bg-green-500  cursor-pointer  hover:bg-green-500 active:dark:bg-green-500 active:bg-green-500">
                            <FileDown size={20} /> File GPX {g.category}
                          </DropdownMenuItem>
                        </Link>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Hero;
