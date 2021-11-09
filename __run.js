import { AtRule, Comment } from "postcss";
import { extension, stylesHint } from "../scss/stuff.js";

/** @type {import("../../index.js").AdderRun<import("./__metadata.js").Options>} */
export const run = async ({ install, updateCss }) => {
	await updateCss({
		path: `/src/variables.${extension}`,
		async style({ postcss }) {
			postcss.append(
				new AtRule({
					name: "import",
					params: '"bootstrap/scss/functions"',
				})
			);
			postcss.append(
				new Comment({
					text: "Override Bootstrap's variables here",
				})
			);
			postcss.append(
				new AtRule({
					name: "import",
					params: '"bootstrap/scss/variables"',
				})
			);
			postcss.append(
				new AtRule({
					name: "import",
					params: '"bootstrap/scss/mixins"',
				})
			);

			return {
				postcss,
			};
		},
	});

	await updateCss({
		path: `/src/app.${extension}`,
		async style({ postcss }) {
			const imports = ["root", "reboot", "type", "accordion", "alert", "badge", "breadcrumb", "buttons", "button-group", "card", "carousel", "close", "containers", "dropdown", "grid", "images", "list-group", "modal", "nav", "navbar", "offcanvas", "pagination", "popover", "progress", "spinners", "toasts", "tooltip", "helpers", "utilities", "utilities/api"];
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
};
