export const name = "Bootstrap";

/** @typedef {{ sveltestrap: boolean }} Options */

/** @type {import("../..").AdderOptions<Options>} */
export const options = {
	sveltestrap: {
		context: "It provides Svelte components with client-side interactivity in Bootstrap's style. https://sveltestrap.js.org/",
		default: false,
		question: "Do you want to install Sveltestrap?",
	},
};
