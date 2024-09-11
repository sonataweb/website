import process from "node:process";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
	schema: "./src/lib/db/schema.ts",
	out: "./migrations",
	dialect: "postgresql",
	dbCredentials: {
		url: process.env.DATABASE_URL!,
	},
});
