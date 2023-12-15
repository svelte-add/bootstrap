import { AtRule, Comment } from "postcss";
import { extension, stylesHint } from "../scss/stuff.js";

/** @type {import("../..").AdderRun<import("./__info.js").Options>} */
export const run = async ({ install, updateCss }) => {
	await updateCss({
		path: `/src/variables.${extension}`,
		async style({ postcss }) {
			postcss.append(
				new AtRule({
					name: "import",
					params: '"bootstrap/scss/functions"',
				}),
			);
			postcss.append(
				new Comment({
					text: "Override Bootstrap's variables here",
				}),
			);
			postcss.append(
				new AtRule({
					name: "import",
					params: '"bootstrap/scss/variables"',
				}),
			);
			postcss.append(
				new AtRule({
					name: "import",
					params: '"bootstrap/scss/variables-dark"',
				}),
			);
			postcss.append(
				new AtRule({
					name: "import",
					params: '"bootstrap/scss/maps"',
				}),
			);
			postcss.append(
				new AtRule({
					name: "import",
					params: '"bootstrap/scss/mixins"',
				}),
			);
			postcss.append(
				new AtRule({
					name: "import",
					params: '"bootstrap/scss/utilities"',
				}),
			);

			return {
				postcss,
			};
		},
	});

	await updateCss({
		path: `/src/app.${extension}`,
		async style({ postcss }) {
			const imports = ["root", "reboot", "type", "images", "containers", "grid", "tables", "forms", "buttons", "transitions", "dropdown", "button-group", "nav", "navbar", "card", "accordion", "breadcrumb", "pagination", "badge", "alert", "progress", "list-group", "close", "toasts", "modal", "tooltip", "popover", "carousel", "spinners", "offcanvas", "placeholders", "helpers", "utilities/api"];
			// They will be added with .append or .after, so reverse first to maintain the expected order
			imports.reverse();

			const [stylesHintComment] = postcss.nodes.filter((node) => node.type === "comment" && node.text === stylesHint);

			for (const import_ of imports) {
				const importAtRule = new AtRule({
					name: "import",
					params: `"bootstrap/scss/${import_}"`,
				});
				if (stylesHintComment) {
					stylesHintComment.after(importAtRule);
				} else {
					postcss.prepend(importAtRule);
				}
			}
			const importHint = new Comment({
				text: "Import only what you need from Bootstrap",
			});
			if (stylesHintComment) {
				stylesHintComment.after(importHint);
			} else {
				postcss.prepend(importHint);
			}

			return {
				postcss,
			};
		},
	});

	await install({ package: "bootstrap" });
	await install({ package: "@popperjs/core" });
};
