import { UsersIcon } from "lucide-react";
import { defineType } from "sanity";
import { IoExtensionPuzzleSharp } from "react-icons/io5";
import { FaHourglassStart } from "react-icons/fa";
import { BsLightningChargeFill } from "react-icons/bs";
import { IconType } from "react-icons/lib";
export const roadmap = defineType({
  name: "roadmap",
  title: "Roadmap",
  type: "document",
  fields: [
    {
      name: "status",
      title: "Status",
      type: "string",
      description: "status dari roadmap",
      initialValue: "registrasi",
      options: {
        list: [
          { title: "Registrasi", value: "registrasi" },
          { title: "Opening", value: "opening" },
          { title: "Baturraden Trail Run", value: "baturraden trail run" },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Deskripsi",
      type: "text",
    },
    {
      name: "duration",
      title: "Durasi",
      description: "masukan tanggal mulai dan selesai",
      type: "object",
      fields: [
        {
          description: "Masukan tanggal mulai",
          name: "start",
          title: "Mulai",
          type: "date",
        },
        {
          description: "Masukan tanggal selesai",
          name: "end",
          title: "Selesai",
          type: "date",
        },
      ],
      options: {
        columns: 2,
      },
    },
  ],
  preview: {
    select: {
      title: "status",
      start: "duration.start",
      end: "duration.end",
    },
    prepare(selection: any) {
      const { title, start, end } = selection;
      const icon: { [key: string]: IconType } = {
        registrasi: FaHourglassStart,
        opening: IoExtensionPuzzleSharp,
        "baturraden trail run": BsLightningChargeFill,
      };
      return {
        media: icon[title as keyof typeof icon] || UsersIcon,
        title: title,
        subtitle: `${start} - ${end}`,
      };
    },
  },
});
