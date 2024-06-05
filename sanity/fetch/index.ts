import { groq } from "next-sanity";
import { client } from "../lib/client";

async function getAllData() {
  const query = groq`
  *[_type == 'event']{
    title,
    date,
    location,
    description,
    image
  }
`;
  const data = await client.fetch(query);
  return data;
}

export default getAllData;
