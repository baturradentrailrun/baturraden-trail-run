"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { CAROUSEL_IMAGE } from "@/constant";
import { cn } from "@/lib/utils";

export function CarouselImage() {
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
    <Carousel
      opts={{
        loop: true,
      }}
      setApi={setApi}
      plugins={[plugin.current]}
      className="w-full h-full relative"
    >
      <CarouselContent className="w-full rounded-xl">
        {CAROUSEL_IMAGE.map((c, index) => {
          return (
            <CarouselItem
              key={index}
              className="w-[300px] h-[300px] rounded-2xl overflow-hidden relative"
            >
              <div className="relative w-full h-full rounded-2xl">
                <Image
                  src={c.image}
                  layout="fill"
                  alt={c.alt}
                  className="object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-85 rounded-2xl"></div>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>

      <div className="absolute bottom-10 right-20 flex gap-2">
        <CarouselPrevious />
        <CarouselNext />
      </div>
      <div className="absolute bottom-16 right-10 flex gap-3">
        {Array.from({ length: count }).map((_, index) => (
          <div
            className={cn(
              index === current - 1 ? "bg-teal-500" : "bg-slate-100 opacity-30",
              "w-5 h-[2px]"
            )}
          ></div>
        ))}
      </div>
    </Carousel>
  );
}
