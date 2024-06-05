import { defineType } from "sanity";

export const contact = defineType({
  name: "contact",
  description: "Contact atau social media",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Nama",
      description: "Email, Instagram, Facebook dll",
      type: "string",
      placeholder: "Masukan Jenis Kontak",
    },
    {
      name: "kontak",
      title: "kontak",
      description:
        "Masukan kontak / pastekan  secara lengkap jika kontak berbentuk link",
      type: "string",
      placeholder: "Masukan kontak",
    },
  ],
  preview: {
    select: {
      title: "name",
      contact: "kontak",
    },
    prepare(selection: any) {
      const { title, contact } = selection;

      return {
        title: title,
        subtitle: contact,
      };
    },
  },
});
