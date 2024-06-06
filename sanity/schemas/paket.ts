import { BoxIcon } from "lucide-react";
import { defineField, defineType } from "sanity";
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
      name: "description",
      title: "Deskripsi Paket",
      type: "string",
      placeholder: "Deskripsi Paket",
    }),
    defineField({
      name: "harga",
      title: "Harga",
      type: "number",
      placeholder: "Harga",
    }),
  ],
});
