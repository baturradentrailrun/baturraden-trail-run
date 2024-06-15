import { groq } from "next-sanity";
import { client } from "../lib/client";

export async function fetchData({
  query,
  slug,
}: {
  query: string;
  slug?: string;
}) {
  try {
    const params = slug ? { slug } : {};
    const data = await client.fetch(groq`${query}`, params);
    return data;
  } catch (error: any) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
}
