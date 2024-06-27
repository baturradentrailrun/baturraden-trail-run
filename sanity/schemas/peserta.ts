import { defineField, defineType } from "sanity";
import { MdOutlinePeopleOutline } from "react-icons/md";
export const peserta = defineType({
  name: "peserta",
  title: "Peserta",
  type: "document",
  icon: MdOutlinePeopleOutline,
  fields: [
    defineField({
      name: "name",
      title: "Nama",
      placeholder: "Nama peserta",
      type: "string",
    }),
    defineField({
      name: "event",
      title: "Event",
      type: "string",
      options: {
        list: [
          { title: "Virtual Run", value: "virtual run" },
          { title: "Running 21KM", value: "running 21km" },
          { title: "Running 7KM", value: "running 7km" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "event",
    },
  },
});
