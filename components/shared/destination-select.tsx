"use client";

import * as React from "react";
import { Check, ChevronsUpDown, MapPin } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DestinationSelect({
  value,
  setValue,
}: {
  value: string;
  setValue: (value: string) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const [destinations, setDestinations] = React.useState<string[]>([]);
  const [loading, setLoading] = React.useState(true);

  // 🔥 Fetch from API
  React.useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const res = await fetch("/api/destinations");
        const data = await res.json();

        setDestinations(data.map((d: any) => d.destination));
      } catch (error) {
        console.error("Failed to fetch destinations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          className="w-full justify-between border-white/20 bg-transparent text-white hover:bg-white/10"
        >
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            {value || "Where to?"}
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-full p-0 bg-white text-black">
        <Command>
          <CommandInput placeholder="Search destination..." />

          {loading ? (
            <div className="p-3 text-sm text-gray-500">
              Loading destinations...
            </div>
          ) : (
            <>
              <CommandEmpty>No destination found.</CommandEmpty>

              <CommandGroup>
                {destinations.map((destination) => (
                  <CommandItem
                    key={destination}
                    value={destination}
                    onSelect={(currentValue) => {
                      setValue(currentValue);
                      setOpen(false);
                    }}
                  >
                    {destination}
                    <Check
                      className={cn(
                        "ml-auto h-4 w-4",
                        value === destination ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </>
          )}
        </Command>
      </PopoverContent>
    </Popover>
  );
}