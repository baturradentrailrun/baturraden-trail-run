import { groq } from "next-sanity";
import { client } from "../lib/client";
import { Paket } from "@/types";

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
      harga,
      slug,
      blockContent
  }
  `;
  const data = await client.fetch(query);
  return data;
}

async function getPaketBySlug(slug: string) {
  const query = groq`
    *[_type == "paket" && slug.current == $slug][0]{
      _id,
      name,
      description,
      harga,
      slug,
      blockContent
    }
  `;
  const data = await client.fetch(query, { slug });
  return data;
}

export { getSponsorship, getRoadmap, getSocialMedia, getPaket, getPaketBySlug };
