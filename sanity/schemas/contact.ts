import { PhoneCall } from "lucide-react";
import { defineType } from "sanity";

export const contact = defineType({
  name: "contact",
  description: "Contact atau social media",
  type: "document",
  icon: PhoneCall,
  fields: [
    {
      name: "iconAndName",
      title: "Icon dan Nama",
      description: "Pilih icon dan masukan nama",
      type: "object",
      fields: [
        {
          title: "Icon",
          name: "icon",
          type: "iconPicker",
          options: {
            filter: [
              "fa-whatsapp",
              "logo_instagram",
              "fa-tiktok",
              "fa-facebook",
              "fa-youtube",
            ],
          },
        },
        {
          name: "socialmedia",
          type: "string",
          title: "Nama",
          validation: (Rule) => Rule.required(),
        },
      ],
      options: {
        columns: 2,
      },
    },
    {
      name: "link",
      title: "Link",
      type: "url",
      description: "Masukan link",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "iconAndName.socialmedia",
      media: "iconAndName.icon",
    },
  },
});
