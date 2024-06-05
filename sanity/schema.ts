import { type SchemaTypeDefinition } from "sanity";
import { categories, roadmap, sponsorship, contact } from "./schemas";
import { linkaplikasi } from "./schemas/link-aplikasi";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categories, sponsorship, roadmap, contact, linkaplikasi],
};
