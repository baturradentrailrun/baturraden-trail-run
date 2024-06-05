import { groq } from "next-sanity";
import { client } from "../lib/client";

async function getRoadmap() {
  const query = groq`
  *[_type == 'roadmap']{
    description,
      status,
      duration
  }
`;
  const data = await client.fetch(query);
  return data;
}

export default getRoadmap;
