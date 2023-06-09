<h1 align="center">👢 Add Bootstrap to Svelte</h1>

[![GitHub issues by-label](https://img.shields.io/github/issues/svelte-add/svelte-add/confirmed%20bug?color=%23DC2626)](https://github.com/svelte-add/svelte-add/issues?q=is%3Aopen+is%3Aissue+label%3A%22confirmed+bug%22)
[![GitHub issues by-label](https://img.shields.io/github/issues/svelte-add/svelte-add/support%20question?color=%23FACC15)](https://github.com/svelte-add/svelte-add/issues?q=is%3Aopen+is%3Aissue+label%3A%22support+question%22)

This is an adder for `svelte-add`; you should [read its `README`](https://github.com/svelte-add/svelte-add#readme) before continuing here.

## ➕ Adding Bootstrap

This adder's codename is `bootstrap`, and can be used like so:

```sh
npx svelte-add@latest bootstrap
```

### 🏞 Supported environments

This adder supports SvelteKit and Vite-powered Svelte apps (all the environments `svelte-add` currently supports).

### ⚙️ Options

This adder doesn't take any options of its own.

## 🛠 Using Bootstrap

After the adder runs,

- You can use Bootstrap classes like `card` or `pt-5` in the markup (components, routes, `app.html`).

- You can [customize your Bootstrap theme with variables](https://getbootstrap.com/docs/5.2/customize/sass/) like `$primary` or `$grid-breakpoints` in `src/variables.scss`.

- The [`@popperjs/core` package](https://www.npmjs.com/package/@popperjs/core) is installed to satisfy `bootstrap`'s peer dependency on it. You can safely ignore it, or uninstall it if you can do so without introducing package manager errors.
