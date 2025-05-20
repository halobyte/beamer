import { pgTable } from "drizzle-orm/pg-core";

export const userTable = pgTable("users", (t) => ({
  id: t.uuid().primaryKey().defaultRandom(),
  clerkId: t.text("clerk_id").unique().notNull(),
  createdAt: t.timestamp("created_at", { mode: "date", withTimezone: true }),
  email: t.text().unique().notNull(),
  firstName: t.text("first_name").notNull(),
  lastName: t.text("last_name").notNull(),
  picture: t.text(),
}));
