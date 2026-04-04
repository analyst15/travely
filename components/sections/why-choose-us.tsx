"use client";

import { ShieldCheck, Globe, Leaf, Zap } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Guided Exploration",
    description:
      "Torquent posuere adipiscing elit at officia debitis aut rerum necessitatibus saepe eveniet",
  },
  {
    icon: ShieldCheck,
    title: "Tailored Attention",
    description:
      "Nemo libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus",
  },
  {
    icon: Zap,
    title: "Seamless Reservations",
    description:
      "Tempore autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet",
  },
  {
    icon: Globe,
    title: "Global Destinations",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm text-primary font-medium uppercase tracking-wide">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            The Advantages We Bring
          </h2>
          <p className="text-muted-foreground mt-4 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-sm border-l-4 border-green-500 hover:shadow-md transition"
              >
                {/* Icon */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                  <Icon className="h-5 w-5 text-green-600" />
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-semibold text-base">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}