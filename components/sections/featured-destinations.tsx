import { db } from "../../app/db"
import { destinations } from "../../app/db/schema"
import { eq } from "drizzle-orm"
import { DestinationCard } from "./destination-card"
import { Key } from "react"

export async function FeaturedDestinations() {
  const featured = await db
    .select()
    .from(destinations)
    .where(eq(destinations.featured, true))

  return (
    <section className="py-16 px-6 md:px-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold">
          Featured Destinations
        </h2>
        <p className="text-muted-foreground mt-2">
          Discover the most popular places around the world
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featured.map((item: { id: Key | null | undefined; name: string; image: string; expeditions: any; tags: any }, index: number) => {
          const isLarge =
            index === 0 || index === featured.length - 1

          return (
            <div
              key={item.id}
              className={isLarge ? "md:col-span-2" : ""}
            >
              <DestinationCard
                title={item.name}
                image={item.image}
                expeditions={item.expeditions ?? 0}
                tags={item.tags ?? []}
                size={isLarge ? "large" : "small"}
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}