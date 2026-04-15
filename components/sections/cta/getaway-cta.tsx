import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export default function GetawayCTA() {
  return (
    <section className="w-full px-4 md:px-8 lg:px-16 mt-20">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-500 px-6 py-8 md:px-12 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
        
        {/* Left Content */}
        <div className="flex items-start gap-4 max-w-2xl">
          
          {/* Icon */}
          <div className="bg-white/20 backdrop-blur-md p-3 rounded-full">
            <Globe className="text-white w-6 h-6" />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-white text-xl md:text-2xl font-semibold leading-tight">
              Looking for Your Perfect Getaway?
            </h2>
            <p className="text-white/90 text-sm md:text-base mt-2 leading-relaxed">
              Let our seasoned travel advisors craft a personalized itinerary
              tailored to your dreams and budget.
            </p>
          </div>
        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-3">
          
          {/* Primary Button */}
          <Button
            className="bg-white text-emerald-600 hover:bg-gray-100 font-medium px-5 py-2 rounded-full"
          >
            Browse All Spots
          </Button>

          {/* Secondary Button (FIXED) */}
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-emerald-600 px-5 py-2 rounded-full transition"
          >
            Speak with Us
          </Button>
        </div>

        {/* Decorative Glow */}
        <div className="absolute right-0 top-0 h-full w-1/3 bg-white/10 rounded-l-full blur-3xl pointer-events-none" />
      </div>
    </section>
  );
}