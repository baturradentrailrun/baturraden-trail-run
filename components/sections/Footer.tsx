import { londrina } from "@/app/(app)/fonts";
import { cn } from "@/lib/utils";
import { getSocialMedia } from "@/sanity/fetch";
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

// Mapping icon names to their corresponding components
const iconComponents = {
  whatsapp: FaWhatsapp,
  instagram: FaInstagram,
  tiktok: FaTiktok,
  facebook: FaFacebook,
  youtube: FaYoutube,
};

async function Footer({ id }: { id: string }) {
  const data = await getSocialMedia();

  return (
    <div id={id} className="bgFooter">
      <section className="bg-blue-700 flex flex-col justify-between padding-container py-16 text-white text-lg md:flex-row bg-opacity-80 backdrop-blur-sm w-full">
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

        <div className="border-t md:border-l border-slate-200 border-dashed mx-12 md:my-0 my-8"></div>

        <div className="flex flex-col flex-1 text-center md:text-left justify-between">
          <div>
            <h2 className="text-md">Untuk info lebih lanjut hubungi</h2>
            <div className="flex items-center w-full mt-5">
              <Mail className="w-16 md:w-9" />
              <p className="md:ml-2 text-sm text-left">
                <b>baturradenfestival@gmail.com</b> atau kunjungi sosial media
                kami.
              </p>
            </div>
          </div>

          <div className="flex gap-5 py-4 justify-center md:justify-start">
            {data.map((social: any) => {
              const iconName = social.name.toLowerCase();
              const IconComponent =
                iconComponents[social.name as keyof typeof iconComponents];

              if (!IconComponent) {
                console.error(`Icon component for ${iconName} not found`);
                return null;
              }

              return (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  className="bg-[#C310C6] p-3 rounded-full flex items-center justify-center"
                >
                  <IconComponent className="text-xl md:text-xl" />
                </Link>
              );
            })}
          </div>
          <p className="opacity-50">
            All Rights reserved @baturradentrailrun Community 2024
          </p>
        </div>
      </section>
    </div>
  );
}

export default Footer;
