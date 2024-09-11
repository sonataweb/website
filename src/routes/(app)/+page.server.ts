import { fail, redirect } from "@sveltejs/kit";
import { lucia } from "$lib/auth";

export const actions = {
	async logOut(event) {
		if (!event.locals.session) return fail(401);

		await lucia.invalidateSession(event.locals.session.id);
		const cookie = lucia.createBlankSessionCookie();

		event.cookies.set(cookie.name, cookie.value, {
			path: "/",
			...cookie.attributes,
		});

		redirect(302, "/");
	},
};
