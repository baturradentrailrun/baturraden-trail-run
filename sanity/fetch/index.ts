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

async function getSponsorship() {
  const query = groq`
  *[_type == 'sponsorship']{
    _id,
      title,
      "imageUrl":
        image.asset->url
  }
  `;
  const data = await client.fetch(query);
  return data;
}
async function getSocialMedia() {
  const query = groq`
  *[_type == "contact"]{
    "name": iconAndName.socialmedia,
    "icon": iconAndName.icon.name,
    "url": link
  }
  `;
  const data = await client.fetch(query);
  return data;
}
async function getPaket() {
  const query = groq`
  *[_type == "paket"]{
    name,
      description,
      harga
  }
  `;
  const data = await client.fetch(query);
  return data;
}

export { getSponsorship, getRoadmap, getSocialMedia, getPaket };
