"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="w-full bg-muted/40 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-10 md:grid-cols-2">
          
          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <span className="inline-block rounded-full bg-emerald-100 px-4 py-1 text-sm font-medium text-emerald-700">
              EMBARK ON A JOURNEY
            </span>

            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-5xl">
              Unleash Your Wanderlust Today
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Immerse yourself in extraordinary landscapes, vibrant cultures,
              and curated experiences designed to transform the way you see the
              world. Every expedition is crafted with passion and precision.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button className="bg-emerald-600 text-white hover:bg-emerald-700 px-6 py-6 text-base">
                Discover Journeys
              </Button>

              <Button
                variant="outline"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6 py-6 text-base"
              >
                Build Your Itinerary
              </Button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-75 w-full overflow-hidden rounded-2xl md:h-125">
            <Image
              src="/images/about.jpg" // <-- replace with your image
              alt="Luxury travel destination"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}