// usiing sanity to import excel file to sanity

import { defineField, defineType } from "sanity";

export const filePeserta = defineType({
  name: "filePeserta",
  description: "File peserta",
  type: "document",
  // definedFiels & accept the file
  fields: [
    defineField({
      name: "file",
      title: "File",
      type: "file",
      description: "File peserta",
      options: {
        accept:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      },
    }),
  ],
});
