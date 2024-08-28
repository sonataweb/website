import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import("tailwindcss").Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	darkMode: "selector",
	theme: {
		extend: {
			fontFamily: {
				sans: [
					`InterVariable, ${defaultTheme.fontFamily.sans.join(", ")}`,
					{ fontFeatureSettings: "'cv01', 'cv11', 'ss01'" },
				],
			},
		},
	},
	plugins: [],
};
