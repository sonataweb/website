import { pgEnum, pgTable, primaryKey, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const providerEnum = pgEnum("connection_provider", ["google", "spotify"]);

export const users = pgTable("users", {
	id: varchar("id", { length: 32 }).primaryKey(),
	username: varchar("username", { length: 32 }).notNull(),
});

export const sessions = pgTable("sessions", {
	id: varchar("id", { length: 128 }).primaryKey(),
	userId: varchar("user_id", { length: 32 })
		.notNull()
		.references(() => users.id),
	expiresAt: timestamp("expires_at", {
		withTimezone: true,
		mode: "date",
	}).notNull(),
});

export const connections = pgTable(
	"connections",
	{
		id: text("id").notNull(),
		provider: providerEnum("provider"),
		userId: varchar("user_id", { length: 32 })
			.notNull()
			.references(() => users.id),
		username: text("name"),
	},
	(table) => ({
		connectionsPk: primaryKey({ columns: [table.id, table.provider] }),
	}),
);
