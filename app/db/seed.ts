import "dotenv/config"

import { db } from "./index"
import { destinations } from "./schema"

async function seed() {
  await db.insert(destinations).values([
    {
      name: "Amalfi Coast, Italy",
      slug: "amalfi-coast-italy",
      image: "/images/amalfi.jpg",
      expeditions: 14,
      tags: ["Trending", "Scenic"],
      featured: true,
    },
    {
      name: "Patagonia, Argentina",
      slug: "patagonia-argentina",
      image: "/images/patagonia.jpg",
      expeditions: 21,
      tags: ["Top Rated"],
      featured: true,
    },
    {
      name: "Marrakech, Morocco",
      slug: "marrakech-morocco",
      image: "/images/marrakech.jpg",
      expeditions: 9,
      tags: ["Heritage"],
      featured: true,
    },
    {
      name: "Queenstown, New Zealand",
      slug: "queenstown-new-zealand",
      image: "/images/queenstown.jpg",
      expeditions: 5,
      tags: ["Exclusive", "Adventure"],
      featured: true,
    },
  ])

  console.log("✅ Seed completed")
}

seed()