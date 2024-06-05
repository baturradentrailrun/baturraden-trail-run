"use client";

import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";

import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";
import { CarouselImageProps } from "@/types";

interface CarouselLogoProps {
  data: CarouselImageProps[];
}
const CarouselLogo: React.FC<CarouselLogoProps> = ({ data }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        setApi={setApi}
        plugins={[plugin.current]}
        className="w-full  mx-auto"
      >
        <CarouselContent className="">
          {data.map((item, index) => (
            <CarouselItem
              key={index}
              className=" basis-1/2 md:basis-1/3 lg:basis-1/4 items-center"
            >
              <Image
                key={index}
                src={item.imageUrl}
                alt={item.title}
                height={20}
                width={200}
                objectFit="contain"
                className="object-contain h-10 lg:h-16"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
};

export default CarouselLogo;
