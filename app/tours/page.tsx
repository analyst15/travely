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