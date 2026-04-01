import { db } from "../db";
import { tours } from "../db/schema";
import { eq } from "drizzle-orm";

export default async function ToursPage({
  searchParams,
}: {
  searchParams: {
    destination?: string;
  };
}) {
  const destination = searchParams.destination;

  let results = [];

  if (destination) {
    results = await db
      .select()
      .from(tours)
      .where(eq(tours.destination, destination));
  } else {
    results = await db.select().from(tours);
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">
        Tours in {destination || "All Destinations"}
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {results.map((tour) => (
          <div
            key={tour.id}
            className="border rounded-xl p-4 shadow"
          >
            <h2 className="font-semibold text-lg">{tour.title}</h2>
            <p className="text-sm text-gray-500">
              {tour.destination}
            </p>
            <p className="mt-2 font-bold">${tour.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}