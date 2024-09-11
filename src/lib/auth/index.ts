import { Lucia } from "lucia";
import { dev } from "$app/environment";
import { adapter } from "$lib/db";

export * from "./spotify";

declare module "lucia" {
	interface Register {
		Lucia: typeof lucia;
		DatabaseUserAttributes: DatabaseUserAttributes;
	}
}

interface DatabaseUserAttributes {
	username: string;
}

export const lucia = new Lucia(adapter, {
	sessionCookie: {
		attributes: {
			secure: !dev,
		},
	},
	getUserAttributes(attributes) {
		return {
			username: attributes.username,
		};
	},
});
