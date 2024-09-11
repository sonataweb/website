import { redirect } from "@sveltejs/kit";
import { generateState } from "arctic";
import { spotify } from "$lib/auth";

export async function GET(event) {
	const state = generateState();
	const url = await spotify.createAuthorizationURL(state);

	event.cookies.set("spotify_oauth_state", state, {
		path: "/",
		secure: import.meta.env.PROD,
		httpOnly: true,
		maxAge: 60 * 10,
		sameSite: "lax",
	});

	redirect(302, url.toString());
}
