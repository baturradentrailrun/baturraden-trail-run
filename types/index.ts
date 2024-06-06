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
};
