import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";
import { DATABASE_URL } from "$env/static/private";
import { sessions, users } from "./schema";

export * from "./schema";

const sql = postgres(DATABASE_URL);

export const db = drizzle(sql);
export const adapter = new DrizzlePostgreSQLAdapter(db, sessions, users);
