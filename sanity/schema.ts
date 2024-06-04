import { type SchemaTypeDefinition } from "sanity";
import { categories, roadmap, sponsorship, contact } from "./schemas";
import { linkaplikasi } from "./schemas/link-aplikasi";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categories, sponsorship, roadmap, contact, linkaplikasi],
};

/**
 * roadmap field ( name, date[start -> finish], desc, status-> references status, contact -> reference contact )
 * map field (name, description , longitude, latitude)
 * galery field (name,description,  image->reference image, contact -> reference contact)
 * jenis paket field(name, description, price, )
 * paket field (name, description, contact -> reference contact, jenis paket -> reference jenis paket)
 * contact field (name, link)
 * event status field (name)
 * images field (name, image)
 */
