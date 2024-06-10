import { BoxIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

// Define the paket schema
export const paket = defineType({
  name: "paket",
  title: "Paket",
  type: "document",
  icon: BoxIcon,

  fields: [
    defineField({
      name: "name",
      title: "Nama Paket",
      type: "string",
      placeholder: "Nama Paket",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 200,
      },
    }),
    defineField({
      name: "harga",
      title: "Harga",
      type: "number",
      placeholder: "Harga",
    }),
    defineField({
      name: "description",
      title: "Deskripsi Paket",
      type: "text",
      placeholder: "Deskripsi Paket",
    }),

    defineField({
      name: "blockContent",
      title: "Block Content",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    }),
  ],
});
