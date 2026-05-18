import Image from "next/image"

const themes = [
  {
    title: "Peak Expeditions",
    trips: 21,
    image: "/images/about-1.jpg",
  },
  {
    title: "Heritage Trails",
    trips: 15,
    image: "/images/about-1.jpg",
  },
  {
    title: "Island Retreats",
    trips: 29,
    image: "/images/about-1.jpg",
  },
  {
    title: "Savanna Safaris",
    trips: 12,
    image: "/images/about-1.jpg",
  },
  {
    title: "City Discoveries",
    trips: 34,
    image: "/images/about-1.jpg",
  },
]

export function ThemeSection() {
  return (
    <section className="w-full px-6 md:px-16 pb-20">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl font-semibold mb-8">
          Browse by Theme
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {themes.map((theme, i) => (
            <div
              key={i}
              className="relative h-[260px] rounded-2xl overflow-hidden bg-gray-200 group"
            >
              
              {/* IMAGE */}
              <Image
                src={theme.image}
                alt={theme.title}
                fill
                sizes="(max-width: 768px) 100vw, 20vw"
                className="object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/40" />

              {/* TEXT */}
              <div className="absolute bottom-4 left-4 text-white z-10">
                <h3 className="font-semibold">{theme.title}</h3>
                <p className="text-sm">{theme.trips} trips</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}