export type CardInfoItemProps = {
  description: string;
  status: string;
  duration: {
    start: string;
    end: string;
  };
};

export type CarouselImageProps = {
  _id: string;
  title: string;
  imageUrl: string;
};

export type CardPaketProps = {
  name: string;
  description: string;
  harga: number;
  index?: number;
  slug?: {
    current: string;
  };
};
// types/index.ts
export interface Paket {
  _id: string;
  name: string;
  description: string;
  harga: number;
  slug: {
    current: string;
  };
  blockContent: (BlockContent | ImageContent)[];
}

export interface BlockContent {
  _type: "block";
  _key: string;
  children: {
    _key: string;
    text: string;
  }[];
}

export interface ImageContent {
  _type: "image";
  _key: string;
  asset: {
    _ref: string;
  };
  alt: string;
}

export interface PesertaProps {
  id: string;
  name: string;
  event: string;
  domisili: string;
  komunitas: string;
}
