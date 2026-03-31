"use client";

import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Search } from "lucide-react";
import { DatePicker } from "@/components/ui/date-picker";
import { useState } from "react";
import { DestinationSelect } from "@/components/shared/destination-select";


export default function Hero() {

  const [arrivalDate, setArrivalDate] = useState<Date>();
  const [departureDate, setDepartureDate] = useState<Date>();
  const [destination, setDestination] = useState("");
  return (
    <section className="relative h-screen flex flex-col justify-center text-center text-white overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6">

        <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-400/30 text-green-400 px-4 py-2 rounded-full text-sm mb-6">
          ● YOUR ADVENTURE AWAITS
        </div>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Journey Beyond <br /> the Ordinary
        </h1>

        <p className="text-white/70 mb-8">
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-green-500 hover:bg-green-600 px-6 py-6 text-lg rounded-lg">
            Begin Your Trip
          </Button>

          <Button
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 px-6 py-6 text-lg rounded-lg"
          >
            Browse Packages
          </Button>
        </div>
      </div>

      {/* 🔥 SEARCH BAR */}
      <div className="relative z-10 mt-16 px-6">
        <div className="max-w-6xl mx-auto bg-black/70 backdrop-blur-xl border border-white/10 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-7 gap-4 items-end">

          {/* Destination */}
          <div className="flex flex-col text-left col-span-2">
            <span className="text-xs text-white/60 mb-1">DESTINATION</span>

            <DestinationSelect
              value={destination}
              setValue={setDestination}
            />
          </div>

          {/* Arrival */}
          <div className="flex flex-col text-left">
            <span className="text-xs text-white/60 mb-1">ARRIVAL DATE</span>
            <DatePicker date={arrivalDate} setDate={setArrivalDate} />
          </div>

          {/* Departure */}
          <div className="flex flex-col text-left">
            <span className="text-xs text-white/60 mb-1">DEPARTURE DATE</span>
            <DatePicker date={departureDate} setDate={setDepartureDate} />
          </div>

          {/* Adults */}
          <div className="flex flex-col text-left">
            <span className="text-xs text-white/60 mb-1">ADULTS</span>
            <input type="number" defaultValue={2} className="bg-transparent border h-10.5 border-white/20 rounded-lg px-3 py-2 text-sm" />
          </div>

          {/* Children */}
          <div className="flex flex-col text-left">
            <span className="text-xs text-white/60 mb-1">CHILDREN</span>
            <input type="number" defaultValue={0} className="bg-transparent h-10.5 border border-white/20 rounded-lg px-3 py-2 text-sm" />
          </div>

          {/* ✅ Button now inline */}
          <div className="flex">
            <Button className="w-full h-10.5 bg-green-500 hover:bg-green-600 flex items-center justify-center gap-2">
              <Search size={16} />
              Find Tours
            </Button>
          </div>

        </div>
      </div>

    </section>
  );
}