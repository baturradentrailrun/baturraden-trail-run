import { BlockContent } from "@/types"; // Import the BlockContent type
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
  preview: {
    select: {
      content: "content",
    },
    prepare(selection: { content: BlockContent[] }) {
      const { content } = selection;

      const getPreviewText = (content: BlockContent[]): string => {
        if (!content || content.length === 0) return "No content";

        const firstBlock = content[0];
        if (
          firstBlock &&
          firstBlock.children &&
          firstBlock.children.length > 0
        ) {
          const text = firstBlock.children.map((child) => child.text).join(" ");
          return text.split(" ").slice(0, 4).join(" ") + "...";
        }

        return "No content";
      };

      return {
        title: "Peraturan",
        subtitle: getPreviewText(content),
      };
    },
  },
});
