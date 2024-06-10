import { fetchPaketBySlug } from "@/sanity/fetch";
import { Paket } from "@/types";
import { PortableText, PortableTextComponents } from "next-sanity";
import React from "react";

interface PaketPageProps {
  params: {
    slug: string;
  };
}

const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold my-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold my-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-medium my-2">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-medium my-2">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-500 pl-4 italic my-4">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => <p className="my-2">{children}</p>,
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside my-4">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside my-4">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="my-1">{children}</li>,
  },
};

const PaketPage = async ({ params }: PaketPageProps) => {
  const { slug } = params;
  const paket = await fetchPaketBySlug(slug);
  if (!paket) {
    return <div className="text-center py-10">Paket tidak ditemukan</div>;
  }

  const { name, harga, description, blockContent }: Paket = paket;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{name}</h1>
      <p className="text-lg mb-2">{description}</p>
      <p className="text-lg font-semibold mb-4">Harga: {harga}</p>
      <div className="prose">
        <PortableText value={blockContent} components={components} />
      </div>
    </div>
  );
};

export default PaketPage;
