"use client";

import React from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { imageSupport } from "@/constant";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";

function CarouselLogo() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
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
          {imageSupport.map((item, index) => (
            <CarouselItem
              key={index}
              className=" basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <Image
                key={index}
                src={item.image}
                alt={item.alt}
                height={20}
                width={250}
                objectFit="contain"
                className="object-contain h-40 lg:h-24"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {/* <div className="flex justify-center ">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className={cn(
              index === current - 1
                ? "bg-slate-500"
                : "bg-slate-100 opacity-30",
              "w-2 h-2 rounded-full mx-1 cursor-pointer"
            )}
          ></div>
        ))}
      </div> */}
    </>
  );
}

export default CarouselLogo;
