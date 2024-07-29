import { defineType } from "sanity";

export const fileGpx = defineType({
  name: "fileUpload",
  title: "File Upload",
  type: "document",
  fields: [
    {
      name: "file",
      title: "Upload File",
      type: "file",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error("File is required"),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Pilih Opsi", value: "pilih opsi" },
          { title: "21k", value: "21k" },
          { title: "7k", value: "7k" },
        ],
        layout: "dropdown", // Display options as dropdown
      },
      initialValue: "pilih opsi", // Default value
      validation: (Rule) => Rule.required().error("Category is required"),
    },
  ],
});
