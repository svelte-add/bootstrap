import { extension } from "../scss/stuff.js";

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
