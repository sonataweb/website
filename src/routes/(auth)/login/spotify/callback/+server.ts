import { OAuth2RequestError } from "arctic";
import { and, eq } from "drizzle-orm";
import { lucia, spotify } from "$lib/auth";
import { connections, db, users } from "$lib/db";
import { ksuid } from "$lib/ksuid";

export async function GET(event) {
	const code = event.url.searchParams.get("code");
	const state = event.url.searchParams.get("state");
	const storedState = event.cookies.get("spotify_oauth_state") ?? null;

	if (!code || !state || !storedState || state !== storedState) {
		return new Response(null, { status: 400 });
	}

	try {
		const tokens = await spotify.validateAuthorizationCode(code);
		const response = await fetch("https://api.spotify.com/v1/me", {
			headers: {
				Authorization: `Bearer ${tokens.accessToken}`,
			},
		});

		const spotifyUser = await response.json();

		const [user] = await db
			.select({ userId: connections.userId })
			.from(connections)
			.where(and(eq(connections.provider, "spotify"), eq(connections.id, spotifyUser.id)));

		const userId = user?.userId ?? ksuid();

		if (!user) {
			await db.transaction(async (tx) => {
				await tx.insert(users).values({
					id: userId,
					username: spotifyUser.display_name,
				});

				await tx.insert(connections).values({
					provider: "spotify",
					id: spotifyUser.id,
					userId,
					username: spotifyUser.display_name,
				});
			});
		}

		const session = await lucia.createSession(userId, {});
		const cookie = lucia.createSessionCookie(session.id);

		event.cookies.set(cookie.name, cookie.value, {
			path: "/",
			...cookie.attributes,
		});

		return new Response(null, {
			status: 302,
			headers: {
				Location: "/",
			},
		});
	} catch (error) {
		if (error instanceof OAuth2RequestError) {
			return new Response(null, { status: 400 });
		}

		return new Response(null, { status: 500 });
	}
}
