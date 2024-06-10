import { type SchemaTypeDefinition } from "sanity";
import { categories, roadmap, sponsorship, contact, paket } from "./schemas";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categories, sponsorship, roadmap, contact, paket],
};
