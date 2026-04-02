import { pgTable, serial, text, integer, date } from "drizzle-orm/pg-core";

export const tours = pgTable("tours", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  destination: text("destination").notNull(),
  price: integer("price").notNull(),

  availableFrom: date("available_from"),
  availableTo: date("available_to"),

  maxGuests: integer("max_guests").notNull(), // 🔥 NEW
});