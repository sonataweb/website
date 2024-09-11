declare global {
	namespace App {
		interface Locals {
			session: import("lucia").Session | null;
			user: import("lucia").User | null;
		}

		interface PageData {
			user: import("lucia").User | null;
		}

		// interface Error {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
