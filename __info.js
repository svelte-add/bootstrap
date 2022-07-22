import { extension } from "../scss/stuff.js";

export const name = "Bootstrap";

export const emoji = "👢";

export const usageMarkdown = ["You can use Bootstrap classes like `card` or `pt-5` in the markup (components, routes, `app.html`).", "You can [customize your Bootstrap theme with variables](https://getbootstrap.com/docs/5.2/customize/sass/) like `$primary` or `$grid-breakpoints` in `src/variables.scss`.", "The [`@popperjs/core` package](https://www.npmjs.com/package/@popperjs/core) is installed to satisfy `bootstrap`'s peer dependency on it. You can safely ignore it, or uninstall it if you can do so without introducing package manager errors."];

/** @type {import("../..").Gatekeep} */
export const gatekeep = async () => {
	return { able: true };
};

/** @typedef {{}} Options */

/** @type {import("../..").AdderOptions<Options>} */
export const options = {};

/** @type {import("../..").Heuristic[]} */
export const heuristics = [
	{
		description: "`bootstrap` is installed",
		async detector({ folderInfo }) {
			return "bootstrap" in folderInfo.allDependencies;
		},
	},
	{
		description: `some \`bootstrap\` files are imported in \`src/app.${extension}\``,
		async detector({ readFile }) {
			const { text } = await readFile({ path: `/src/app.${extension}` });
			return text.includes("bootstrap");
		},
	},
];
