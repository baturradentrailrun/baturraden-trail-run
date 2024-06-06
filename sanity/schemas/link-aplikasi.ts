import { defineType } from "sanity";
import { GrApple } from "react-icons/gr";
import { BiLogoPlayStore } from "react-icons/bi";
import { IconType } from "react-icons/lib";
import { Clock, Link2 } from "lucide-react";
export const linkaplikasi = defineType({
  name: "appurl",
  type: "document",
  icon: Link2,
  fields: [
    {
      name: "name",
      title: "App Name",
      type: "string",
      initialValue: "appstore",
      options: {
        list: [
          { title: "AppStore", value: "appstore" },
          { title: "PlayStore", value: "playstore" },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "url",
      title: "Link",
      description: "pastekan link  secara lengkap",
      type: "string",
      placeholder: "Masukan link",
    },
  ],
  preview: {
    select: {
      title: "name",
      url: "url",
    },
    prepare(selection: any) {
      const { title, url } = selection;
      const icon: { [key: string]: IconType } = {
        appstore: GrApple,
        playstore: BiLogoPlayStore,
      };
      return {
        media: icon[title as keyof typeof icon] || Clock,
        title: title,
        subtitle: url,
      };
    },
  },
});
