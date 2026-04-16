// types/tour.ts
export interface Tour {
  id: number
  title: string
  price: number
  days: number
  location: string
  description: string
  rating: number
  image: string
  badge: "Top Rated" | "Hot Deal" | "Cultural" | "Limited"
}