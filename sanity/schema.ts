import { type SchemaTypeDefinition } from "sanity";
import {
  roadmap,
  sponsorship,
  contact,
  paket,
  faq,
  peraturan,
  peserta,
} from "./schemas";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [peserta, sponsorship, roadmap, contact, paket, faq, peraturan],
};
