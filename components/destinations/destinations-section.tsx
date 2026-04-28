"use client";

import { useState } from "react";
import DestinationCard from "./destination-card";
import RegionTabs from "./region-tabs";
import { destinations } from "@/lib/data/destinations";

export default function DestinationsSection() {
  const [region, setRegion] = useState("All");

  const filtered =
    region === "All"
      ? destinations
      : destinations.filter((d) => d.region === region);

  return (
    <section className="py-16 container mx-auto px-4">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold">
          Explore World-Class Getaways
        </h2>
        <p className="text-muted-foreground mt-4">
          Quisque velit nisi pretium ut lacinia in elementum id enim.
          Vivamus magna justo lacinia eget consectetur sed convallis.
        </p>
      </div>

      {/* Tabs */}
      <div className="mt-8">
        <RegionTabs value={region} onChange={setRegion} />
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {filtered.map((item) => (
          <DestinationCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}