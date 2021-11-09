<h1 align="center">👢 Add Bootstrap to Svelte</h1>

This is an adder for `svelte-add`; you should [read its `README`](https://github.com/svelte-add/svelte-add#readme) before continuing here.

## ➕ Adding Bootstrap

This adder's codename is `bootstrap`, and can be used like so:

```sh
npx svelte-add@latest bootstrap
```

### 🏞 Supported environments

This adder supports SvelteKit and Vite-powered Svelte apps (all the environments `svelte-add` currently supports).

### ⚙️ Options

- `sveltestrap` (default `false`): whether or not to install [Sveltestrap](https://github.com/bestguy/sveltestrap).

## 🛠 Using Bootstrap

After the adder runs,

- You can use Bootstrap classes like `card` or `pt-5` in the markup (components, routes, `app.html`).

- You can [customize your Bootstrap theme with variables](https://getbootstrap.com/docs/5.1/customize/sass/) like `$primary` or `$grid-breakpoints` in `src/variables.scss`.
