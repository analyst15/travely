"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT IMAGE */}
        <div className="relative">
          <Image
            src="/images/about.jpg" // replace with your image
            alt="About Travely"
            width={600}
            height={500}
            className="rounded-2xl object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="text-green-600 font-medium mb-2 uppercase tracking-wide">
            About Us
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
            Crafting Memorable Adventures Around the Globe
          </h2>

          <p className="text-gray-600 mb-4">
            We specialize in creating unforgettable travel experiences tailored
            to your needs. From breathtaking destinations to seamless planning,
            we handle every detail so you can focus on the journey.
          </p>

          <p className="text-gray-600 mb-6">
            Whether you're seeking adventure, relaxation, or cultural immersion,
            our team ensures every trip is truly exceptional.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              "Seasoned travel specialists worldwide",
              "Tailored plans for every adventure",
              "Round-the-clock traveler assistance",
              "Best price guarantee on all packages",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="text-green-600 w-5 h-5" />
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>

          {/* RATING CARD */}
          <Card className="rounded-xl shadow-sm max-w-sm">
            <CardContent className="flex items-center gap-4 p-4">
              <div className="w-12 h-12 rounded-full bg-gray-200" />

              <div>
                <p className="text-yellow-500 font-semibold">
                  ⭐⭐⭐⭐⭐ 4.8/5
                </p>
                <p className="text-sm text-gray-500 italic">
                  "Truly exceptional service!"
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}