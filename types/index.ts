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
  blockContent: blockContent[];
}

export interface blockContent {
  _type: "block";
  _key: string;
  children: {
    _key: string;
    text: string;
  }[];
}
