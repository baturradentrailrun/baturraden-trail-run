// sanity schema for faq
import { defineType } from "sanity";
import { FaQuestionCircle } from "react-icons/fa";

export const faq = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  icon: FaQuestionCircle,
  fields: [
    {
      name: "question",
      title: "Pertanyaan",
      type: "string",
    },
    {
      name: "answer",
      title: "Jawaban",
      type: "text",
    },
  ],
  preview: {
    select: {
      title: "question",
    },
  },
});
