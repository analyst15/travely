"use client";

import {
  BadgeCheck,
  Headphones,
  ShieldCheck,
  MapPin,
  CalendarCheck,
  Leaf,
} from "lucide-react";

const features = [
  {
    icon: BadgeCheck,
    title: "Certified Travel Experts",
    description:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet",
  },
  {
    icon: Headphones,
    title: "Round-the-Clock Assistance",
    description:
      "Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus",
  },
  {
    icon: ShieldCheck,
    title: "Unbeatable Value Promise",
    description:
      "Itaque earum rerum hic tenetur a sapiente delectus ut aut reiciendis voluptatibus maiores",
  },
  {
    icon: MapPin,
    title: "Regional Insight",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed consequuntur",
  },
  {
    icon: CalendarCheck,
    title: "Adaptable Scheduling",
    description:
      "Accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
  },
  {
    icon: Leaf,
    title: "Eco-Conscious Journeys",
    description:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-green-500 hover:shadow-md transition"
            >
              {/* ICON */}
              <Icon className="w-6 h-6 text-green-500 mb-4" />

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}