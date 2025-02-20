"use client"
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { random_img, RANDOM_IMG_1200_400 } from "../../constants/constent";

export const CarouselPlugin = ({ imgUrl }) => {
  const plugin = React.useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      stopOnFocusIn: false,
    })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full rounded-lg"
      // onMouseEnter={plugin.current.stop}
      // onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div>
              <img
                src={random_img(1200, 500, Math.ceil(Math.random() * 100))}
                alt="i"
                className="rounded-lg min-w-full"

              />
              {/* <img src={"https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2016/03/fall-trees-road-1.jpg"} alt="i" className="rounded-lg" /> */}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
