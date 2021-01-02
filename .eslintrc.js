module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "react-hooks"],
	extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
	rules: {
		"@typescript-eslint/explicit-module-boundary-types": "off",
		// Warn about every use of @ts-ignore
		"@typescript-eslint/ban-ts-comment": "warn",
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
	},
}
