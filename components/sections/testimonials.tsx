"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Natalie Prescott",
    role: "Startup Founder",
    image: "/images/user1.jpg",
    content:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae illum fugiat quo.",
  },
  {
    name: "Marcus Whitfield",
    role: "Managing Director",
    image: "/images/user2.jpg",
    content:
      "Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip labore amet velit debitis.",
  },
  {
    name: "Elena Vasquez",
    role: "Lead Designer",
    image: "/images/user3.jpg",
    content:
      "Voluptas sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore magnam.",
  },
    {
    name: "Elena Vasquez",
    role: "Lead Designer",
    image: "/images/user3.jpg",
    content:
      "Voluptas sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore magnam.",
  },
];

export default function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  return (
    <section className="py-20 bg-[#eef4f3]">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-2">
          Testimonials Home
        </h2>
        <p className="text-muted-foreground mb-12">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>

        {/* Carousel */}
        <Carousel
          opts={{ align: "center", loop: true }}
          plugins={[plugin.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="relative pt-12">
                  {/* Avatar */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
                    <div className="w-20 h-20 rounded-full border-4 border-white shadow-md overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Card */}
                  <Card className="rounded-2xl shadow-lg border-none bg-white">
                    <CardContent className="pt-16 pb-6 px-6 text-center">
                      <p className="text-muted-foreground italic mb-6">
                        {item.content}
                      </p>

                      {/* Stars */}
                      <div className="flex justify-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>

                      <h3 className="font-semibold text-lg">
                        {item.name}
                      </h3>
                      <p className="text-green-600 text-sm font-medium uppercase">
                        {item.role}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {[...Array(testimonials.length)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full bg-green-400 opacity-50"
            />
          ))}
        </div>
      </div>
    </section>
  );
}