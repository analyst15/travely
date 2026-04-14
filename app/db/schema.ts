import { pgTable, serial, text, integer, date, boolean, timestamp, json, } from "drizzle-orm/pg-core";

export const tours = pgTable("tours", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  destination: text("destination").notNull(),
  price: integer("price").notNull(),
  availableFrom: date("available_from"),
  availableTo: date("available_to"),
  maxGuests: integer("max_guests").notNull(), // 🔥 NEW
});

export const destinations = pgTable("destinations", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").unique().notNull(),
  image: text("image").notNull(),
  expeditions: integer("expeditions").default(0),
  tags: json("tags").$type<string[]>(),
  featured: boolean("featured").default(false),
  createdAt: timestamp("created_at").defaultNow(),
})

