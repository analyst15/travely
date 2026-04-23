"use client";

import { Compass, Globe, Users, Star } from "lucide-react";

const stats = [
  {
    icon: Compass,
    value: "420+",
    label: "Adventures Led",
  },
  {
    icon: Globe,
    value: "30+",
    label: "Destinations",
  },
  {
    icon: Users,
    value: "12K+",
    label: "Happy Explorers",
  },
  {
    icon: Star,
    value: "4.9",
    label: "Average Rating",
  },
];

export default function StatsStrip() {
  return (
    <section className="px-6 md:px-12 lg:px-20 -mt-12 relative z-20">
      <div className="bg-green-500 text-white rounded-2xl shadow-xl py-8 px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 text-center">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={index}
                className={`flex flex-col items-center justify-center text-center gap-2 [&>svg]:mx-auto ${
                  index !== stats.length - 1
                    ? "md:border-r md:border-white/30"
                    : ""
                }`}
              >
                <Icon className="w-6 h-6 opacity-90" />

                <h3 className="text-xl md:text-2xl font-bold">
                  {stat.value}
                </h3>

                <p className="text-xs md:text-sm uppercase tracking-wide text-white/80">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}