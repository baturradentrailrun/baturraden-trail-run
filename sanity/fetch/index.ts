import { groq } from "next-sanity";
import { client } from "../lib/client";
import { fetchData } from "./fetchData";

async function getRoadmap() {
  const data = await fetchData({
    query: `*[_type == 'roadmap']{
        description,
          status,
          duration
      }
    `,
  });
  return data;
}

async function getSponsorship() {
  const data = fetchData({
    query: `*[_type == 'sponsorship']{
      _id,
      title,
      "imageUrl":
        image.asset->url
    }
    `,
  });

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
  const data = fetchData({
    query: `
    *[_type == "paket"]{
      name,
        description,
        harga,
        slug,
        blockContent
    }
    `,
  });

  return data;
}

async function getPaketBySlug(slug: string) {
  const data = fetchData({
    query: `
    *[_type == "paket" && slug.current == $slug][0]{
      _id,
      name,
      description,
      harga,
      slug,
      blockContent
    }
  `,
    slug,
  });

  return data;
}
async function getPeraturan() {
  const data = fetchData({
    query: ` *[_type == 'peraturan']`,
  });
  return data;
}
export {
  getSponsorship,
  getRoadmap,
  getSocialMedia,
  getPaket,
  getPaketBySlug,
  getPeraturan,
};
