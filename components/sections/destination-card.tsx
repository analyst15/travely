// components/destination-card.tsx

import Image from "next/image"

interface DestinationCardProps {
  title: string
  image: string
  expeditions: number
  tags?: string[]
  size?: "large" | "small"
}

export function DestinationCard({
  title,
  image,
  expeditions,
  tags = [],
  size = "small",
}: DestinationCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
        size === "large" ? "h-80" : "h-62.5"
      }`}
    >
      {/* Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover group-hover:scale-105 transition duration-500"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

      {/* Tags */}
      <div className="absolute top-3 right-3 flex gap-2">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="text-xs bg-white/90 text-black px-2 py-1 rounded-full font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Content */}
      <div className="absolute bottom-4 left-4 text-white">
        <p className="text-xs opacity-80 mb-1">
          {expeditions} Expeditions
        </p>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </div>
  )
}