// components/tours/TourCard.tsx
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Clock, MapPin } from "lucide-react"
import { Tour } from "@/types/tour"

const badgeColors: Record<string, string> = {
  "Top Rated": "bg-green-500",
  "Hot Deal": "bg-red-500",
  "Cultural": "bg-purple-500",
  "Limited": "bg-orange-500",
}

export default function TourCard({ tour }: { tour: Tour }) {
  return (
    <div className="flex flex-col md:flex-row rounded-2xl border bg-white overflow-hidden shadow-sm hover:shadow-md transition">
      
      {/* Image */}
      <div className="relative w-full md:w-1/3 h-64 md:h-auto">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover"
        />

        <Badge
          className={`absolute top-4 left-4 text-white ${badgeColors[tour.badge]}`}
        >
          {tour.badge.toUpperCase()}
        </Badge>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between p-6 flex-1">
        
        {/* Top */}
        <div>
          <p className="text-green-600 font-semibold text-lg">
            ${tour.price.toLocaleString()}
          </p>

          <h3 className="text-xl font-semibold mt-1">{tour.title}</h3>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
            <div className="flex items-center gap-1">
              <Clock size={16} />
              {tour.days} Days
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={16} />
              {tour.location}
            </div>
          </div>

          <p className="text-sm text-muted-foreground mt-3 line-clamp-3">
            {tour.description}
          </p>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between mt-6">
          
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {tour.rating}
            </span>
          </div>

          <Button variant="link" className="text-green-600">
            View Details →
          </Button>
        </div>
      </div>
    </div>
  )
}