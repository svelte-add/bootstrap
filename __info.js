import { extension } from "../scss/stuff.js";

export const name = "Bootstrap";

export const emoji = "👢";

export const usageMarkdown = ["You can use Bootstrap classes like `card` or `pt-5` in the markup (components, routes, `app.html`).", "You can [customize your Bootstrap theme with variables](https://getbootstrap.com/docs/5.1/customize/sass/) like `$primary` or `$grid-breakpoints` in `src/variables.scss`."];

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
