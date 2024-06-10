import React from "react";
import { PortableTextReactComponents } from "@portabletext/react";

const Components: PortableTextReactComponents = {
  types: {},
  listItem: {},
  hardBreak: false,
  unknownType: ({ children }) => <span>{children}</span>, // Add the missing 'unknownType' property
  unknownBlockStyle: ({ children }) => <div>{children}</div>, // Add the missing 'unknownBlockStyle' property
  unknownList: ({ children }) => <ul>{children}</ul>, // Add the missing 'unknownList' property
  unknownListItem: ({ children }) => <li>{children}</li>, // Add the missing 'unknownListItem' property
  unknownMark: ({ children }) => <span>{children}</span>,
  // Add the other missing properties here

  block: {
    normal: ({ children }) => <p className="my-2">{children}</p>,
    h1: ({ children }) => <h1 className="text-3xl font-bold">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-bold">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-bold">{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => <span className="underline">{children}</span>,
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside">{children}</ol>
    ),
  },
};

export default Components;
