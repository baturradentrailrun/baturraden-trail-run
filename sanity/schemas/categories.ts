import { BoltIcon } from "@sanity/icons";
export const categories = {
  name: "category",
  title: "Category",
  type: "document",
  icon: BoltIcon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "date",
      title: "Date",
      type: "date",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
  ],
};
