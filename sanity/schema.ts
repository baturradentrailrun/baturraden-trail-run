import { type SchemaTypeDefinition } from "sanity";
import {
  roadmap,
  sponsorship,
  contact,
  paket,
  peraturan,
  filePeserta,
  fileGpx,
} from "./schemas";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    sponsorship,
    roadmap,
    contact,
    paket,
    peraturan,
    filePeserta,
    fileGpx,
  ],
};
