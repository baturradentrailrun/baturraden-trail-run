import { GoTasklist } from "react-icons/go";
export const sponsorship = {
  title: "Sponsorship",
  name: "sponsorship",
  type: "document",
  icon: GoTasklist,
  fields: [
    {
      title: "Name",
      name: "title",
      description: "Name of the sponsor",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: "Image",
      name: "image",
      type: "image",
    },
  ],
};
