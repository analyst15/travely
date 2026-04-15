// components/tours/FeaturedToursSection.tsx
import TourCard from "./TourCard"
import { Tour } from "@/types/tour"

const tours: Tour[] = [
  {
    id: 1,
    title: "Summit Peak Expedition",
    price: 3290,
    days: 7,
    location: "Switzerland",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 4.7,
    image: "/images/tour1.jpg",
    badge: "Top Rated",
  },
  {
    id: 2,
    title: "Tropical Shoreline Escape",
    price: 1850,
    days: 6,
    location: "Philippines",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    rating: 4.9,
    image: "/images/tour2.jpg",
    badge: "Hot Deal",
  },
  {
    id: 3,
    title: "Heritage Temple Discovery",
    price: 2640,
    days: 9,
    location: "Cambodia",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus.",
    rating: 4.5,
    image: "/images/tour3.jpg",
    badge: "Cultural",
  },
  {
    id: 4,
    title: "Savanna Wildlife Voyage",
    price: 4120,
    days: 12,
    location: "Kenya",
    description:
      "Nulla facilisi morbi tempus iaculis urna id volutpat.",
    rating: 4.8,
    image: "/images/tour4.jpg",
    badge: "Limited",
  },
]

export default function FeaturedToursSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold">Featured Tours</h2>
          <p className="text-muted-foreground mt-2">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  )
}