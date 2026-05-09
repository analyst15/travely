import { Button } from "@/components/ui/button"
import { Calendar, Users, Star } from "lucide-react"
import Image from "next/image"

export function FeaturedTour() {
  return (
    <section className="w-full px-6 md:px-16 pb-20">
      <div className="max-w-7xl mx-auto">
        
        <div className="relative rounded-3xl overflow-hidden">
          
          {/* BACKGROUND IMAGE */}
          <Image
            src="/images/about-1.jpg" // replace with your image
            alt="Featured Tour"
            fill
            className="object-cover"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/50" />

          {/* CONTENT */}
          <div className="relative z-10 p-8 md:p-12 lg:p-16 text-white max-w-3xl">
            
            {/* TAG */}
            <span className="inline-block bg-green-600 text-white text-xs px-4 py-1 rounded-full mb-6">
              TOP PICK
            </span>

            {/* TITLE */}
            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Ancient Temples of Southeast Asia
            </h2>

            {/* DESCRIPTION */}
            <p className="text-white/80 mb-6 leading-relaxed">
              Immerse yourself in centuries-old sanctuaries nestled among lush
              jungles and serene river valleys.
            </p>

            {/* META INFO */}
            <div className="flex flex-wrap gap-6 text-sm mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="text-green-400" size={18} />
                <span>14 Days</span>
              </div>

              <div className="flex items-center gap-2">
                <Users className="text-green-400" size={18} />
                <span>Up to 10 Guests</span>
              </div>

              <div className="flex items-center gap-2">
                <Star className="text-green-400" size={18} />
                <span>4.9 Rating</span>
              </div>
            </div>

            {/* PRICE + CTA */}
            <div className="flex items-center gap-6 flex-wrap">
              <div>
                <p className="text-sm text-white/70">Starting at</p>
                <p className="text-3xl font-bold">$2,850</p>
              </div>

              <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-6 py-2">
                View Details
              </Button>
            </div>

          </div>

        </div>

      </div>
    </section>
    
  )
}