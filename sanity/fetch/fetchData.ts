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
    const data = await client.fetch(groq`${query}`, params, {
      next: { revalidate: 5 },
    });
    return data;
  } catch (error: any) {
    console.error("Error fetching data:", error);
    throw new Error(`Error fetching data: ${error.message}`);
  }
}
