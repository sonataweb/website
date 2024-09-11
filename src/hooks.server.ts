import { lucia } from "$lib/auth";

export async function handle({ event, resolve }) {
	const sessionId = event.cookies.get(lucia.sessionCookieName);

	if (!sessionId) {
		event.locals.user = null;
		event.locals.session = null;

		return resolve(event);
	}

	const { session, user } = await lucia.validateSession(sessionId);

	const cookie = session?.fresh
		? lucia.createSessionCookie(session.id)
		: !session
			? lucia.createBlankSessionCookie()
			: null;

	if (cookie) {
		event.cookies.set(cookie.name, cookie.value, {
			path: "/",
			...cookie.attributes,
		});
	}

	event.locals.user = user;
	event.locals.session = session;

	return resolve(event);
}
