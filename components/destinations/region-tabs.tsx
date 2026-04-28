"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Props = {
  value: string;
  onChange: (val: string) => void;
};

export default function RegionTabs({ value, onChange }: Props) {
  const regions = ["All", "Asia", "Europe", "Africa", "Americas"];

  return (
    <Tabs value={value} onValueChange={onChange}>
      <TabsList className="flex justify-center bg-transparent gap-6">
        {regions.map((region) => (
          <TabsTrigger
            key={region}
            value={region}
            className="data-[state=active]:border-b-2 data-[state=active]:border-green-600 rounded-none px-2"
          >
            {region}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}