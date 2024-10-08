import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import("tailwindcss").Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	darkMode: "selector",
	theme: {
		extend: {
			colors: {
				"cover-art": {
					bg: "var(--cover-art-bg)",
					fg: "var(--cover-art-fg)",
				},
			},
			fontFamily: {
				sans: [
					`InterVariable, ${defaultTheme.fontFamily.sans.join(", ")}`,
					{ fontFeatureSettings: "'cv01', 'cv11', 'ss01'" },
				],
				mono: ["'JetBrains Mono Variable'", ...defaultTheme.fontFamily.mono],
			},
		},
	},
	plugins: [],
};
