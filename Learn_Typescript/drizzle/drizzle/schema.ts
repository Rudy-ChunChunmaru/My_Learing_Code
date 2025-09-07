import { pgTable, unique, bigint, varchar, integer } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const users = pgTable("users", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint({ mode: "number" }).primaryKey().generatedAlwaysAsIdentity({ name: "users_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 9223372036854775807, cache: 1 }),
	username: varchar({ length: 255 }).notNull(),
	age: integer().notNull(),
	email: varchar({ length: 255 }).notNull(),
	address: varchar({ length: 255 }).notNull(),
	phoneNum: varchar("phone_num", { length: 20 }),
}, (table) => [
	unique("users_email_unique").on(table.email),
]);
