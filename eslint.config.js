import eslint from "@antfu/eslint-config";

export default eslint({
	svelte: true,
	stylistic: false,
	rules: {
		"no-console": "off",
		"no-unused-vars": "off",
		"import/order": [
			"error",
			{
				pathGroups: [
					{
						pattern: "$app/**",
						group: "external",
						position: "after",
					},
					{
						pattern: "$env/**",
						group: "external",
						position: "after",
					},
					{
						pattern: "$lib/**",
						group: "external",
						position: "after",
					},
				],
				pathGroupsExcludedImportTypes: [],
			},
		],
		"unused-imports/no-unused-imports": "off",
		"unused-imports/no-unused-vars": "off",
		"svelte/no-at-html-tags": "off",
	},
});
