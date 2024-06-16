import { BlockContent } from "@/types";
import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const peraturan = defineType({
  name: "peraturan",
  title: "Peraturan",
  icon: DocumentTextIcon,
  type: "document",
  fields: [
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});
