import { extension } from "../scss/stuff.js";

export const name = "Bootstrap";

/** @type {import("../..").Gatekeep} */
export const gatekeep = async () => {
	return { able: true };
};

/** @typedef {{ sveltestrap: boolean }} Options */

/** @type {import("../..").AdderOptions<Options>} */
export const options = {
	sveltestrap: {
		context: "It provides Svelte components with client-side interactivity in Bootstrap's style. https://sveltestrap.js.org/",
		default: false,
		question: "Do you want to install Sveltestrap?",
	},
};

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
