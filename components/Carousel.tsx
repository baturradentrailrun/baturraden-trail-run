"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function CarouselImage() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full h-full relative"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="w-full rounded-xl">
        <CarouselItem className="w-[300px]">
          <Image
            src={"/carouselImage.png"}
            width={728}
            height={300}
            alt="carousel image"
            className="rounded-2xl"
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            src={"/carouselImage.png"}
            width={728}
            height={300}
            alt="carousel image"
            className="rounded-2xl"
          />
        </CarouselItem>
      </CarouselContent>
      <div className="absolute bottom-10 right-20 ">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
