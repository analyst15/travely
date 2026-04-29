import Image from "next/image";


export default function AboutPage() {
  return (
    <div className="w-full">
                <section className="relative h-100 w-full">
                    <Image
                        src="/images/about-hero.jpg"
                        alt="About Hero"
                        fill
                        className="object-cover"
                        priority
                    />
    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50" />
    
                    {/* Content */}
                    <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
                        <h1 className="text-4xl md:text-5xl font-bold">Tours</h1>
                        <p className="mt-4 max-w-2xl text-sm md:text-base text-gray-200">
                            Esse dolorum voluptatem ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.
                        </p>
    
                        <div className="mt-3 text-sm text-gray-300">
                            Home <span className="mx-2">/</span>{" "}
                            <span className="text-green-400">Destinations</span>
                        </div>
                    </div>
                </section>
            </div>
  )
}

// import { db } from "../db";
// import { tours } from "../db/schema";
// import { and, eq, gte, lte } from "drizzle-orm";

// export default async function ToursPage({
//   searchParams,
// }: {
//   searchParams: {
//     destination?: string;
//     arrival?: string;
//     departure?: string;
//     adults?: string;
//     children?: string;
//   };
// }) {
//   const {
//     destination,
//     arrival,
//     departure,
//     adults = "1",
//     children = "0",
//   } = searchParams;

//   const totalGuests = Number(adults) + Number(children);

//   const filters = [];

//   // 🔹 Destination filter
//   if (destination) {
//     filters.push(eq(tours.destination, destination));
//   }

//   // 🔹 Date filtering
//   if (arrival) {
//     filters.push(lte(tours.availableFrom, arrival));
//   }

//   if (departure) {
//     filters.push(gte(tours.availableTo, departure));
//   }

//   // 🔹 Guests filtering
//   if (totalGuests) {
//     filters.push(gte(tours.maxGuests, totalGuests));
//   }

//   const results =
//     filters.length > 0
//       ? await db.select().from(tours).where(and(...filters))
//       : await db.select().from(tours);

//   return (
//     <div className="p-10">
//       <h1 className="text-2xl font-bold mb-6">
//         Available Tours
//       </h1>

//       {results.length === 0 ? (
//         <p className="text-gray-500">
//           No tours match your search criteria.
//         </p>
//       ) : (
//         <div className="grid md:grid-cols-3 gap-6">
//           {results.map((tour) => (
//             <div
//               key={tour.id}
//               className="border rounded-xl p-4 shadow"
//             >
//               <h2 className="font-semibold text-lg">
//                 {tour.title}
//               </h2>

//               <p className="text-sm text-gray-500">
//                 {tour.destination}
//               </p>

//               <p className="text-sm mt-1">
//                 Available: {tour.availableFrom} → {tour.availableTo}
//               </p>

//               <p className="mt-2 font-bold">
//                 ${tour.price}
//               </p>

//               <p className="text-sm text-gray-600">
//                 Max Guests: {tour.maxGuests}
//               </p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }