# AGENTS.md

## Cursor Cloud specific instructions

This is the `@sanity/logos` React library (the Sanity and GROQ logos), structured
as a pnpm workspace that follows the tooling of the
[`sanity-io/ui`](https://github.com/sanity-io/ui) monorepo: the published
`@sanity/logos` package lives in `packages/logos` and its React Storybook in
`apps/storybook` (`pnpm-workspace.yaml`). The root `package.json` is a private
workspace root whose scripts orchestrate via pnpm filters. Package manager is
pnpm (`packageManager` pin in `package.json`); developing in this repo requires
Node `>=22.13` (required by pnpm), while the published package keeps its own
`engines` range. Keep Node, pnpm, the `catalog` versions in
`pnpm-workspace.yaml`, lint/format config, CI workflows and the Changesets setup
in sync with sanity-io/ui.

Standard scripts live in the root `package.json` (`lint`, `build`, `dev`,
`test:browser`). Notes that are not obvious from the scripts:

- Linting uses [oxlint](https://oxc.rs/docs/guide/usage/linter.html) with a
  root `.oxlintrc.json` (type-aware via `oxlint-tsgolint`). TypeScript type
  checking is included in `pnpm lint` via the `typeCheck` option — there is no
  separate `tsc` command. Run `pnpm lint:fix` to auto-fix issues when
  possible. Storybook rules come from `eslint-plugin-storybook`, loaded through
  oxlint's JS plugins support (`jsPlugins`) and enabled via `overrides` scoped
  to story files and `.storybook/main.ts`. `packages/logos` is allowed to use
  `forwardRef` (unlike the rest of the repo) because its `react` peer range
  includes React 18.
- `pnpm knip` runs [knip](https://knip.dev) (config in `knip.jsonc`, also a CI
  job) to detect unused files, dependencies and exports. The script passes
  `--treat-config-hints-as-errors`, so stale knip config also fails the run.
- `packages/logos` is built with [tsdown](https://tsdown.dev) via
  `@sanity/tsdown-config` (`tsdown.config.mts`). The build regenerates the
  package.json `exports`: locally `@sanity/logos` resolves to its TypeScript
  source (dev exports), so Storybook and oxlint's type checker work without a
  build, while the publishable dist `exports` live under `publishConfig` and
  are applied by `pnpm pack`/`publish`.
- `@sanity/color` (released from `sanity-io/color`) is a regular npm
  dependency. The Storybook's theme decorator uses the published `@sanity/ui`,
  whose static styles are loaded by importing `@sanity/ui/styles.css` in
  `.storybook/preview.tsx`.
- `pnpm dev` starts Storybook on http://localhost:6006.
- `pnpm test:browser` runs the Storybook tests: vitest renders every story in
  headless Chromium via `@storybook/addon-vitest` and executes story `play`
  interactions. The Playwright-provided browser must be installed once via
  `pnpm --filter sanity-logos-storybook exec playwright install chromium`.
  There are no unit tests.
- Releases are managed with Changesets: run `pnpm changeset` to add a changeset
  to a PR that should trigger a release. Merging to `main` opens/updates a
  "Version Packages" PR, and merging that publishes to npm from
  `.github/workflows/release.yml` via npm trusted publishing (OIDC, no npm
  token). npm trusted publishing is pinned to that workflow filename, so don't
  rename it.
