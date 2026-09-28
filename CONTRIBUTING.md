# Contributing guidelines

This repository is a pnpm workspace. The published `@sanity/logos` package lives in
[`packages/logos`](packages/logos), and the Storybook lives in
[`apps/storybook`](apps/storybook).

## Getting started

```sh
pnpm install
pnpm build
```

Run `pnpm dev` to start Storybook (http://localhost:6006). Storybook resolves
`@sanity/logos` from the package source, so edits to `packages/logos/src`
hot-reload without a rebuild.

## Testing

Browser tests live in the Storybook app (`apps/storybook`) and use
[Storybook's Vitest addon](https://storybook.js.org/docs/writing-tests/integrations/vitest-addon):
every story is rendered as a smoke test in headless Chromium, and interaction
tests are written as story [`play` functions](https://storybook.js.org/docs/writing-stories/play-function).

Install the Playwright-provided browser once with
`pnpm --filter sanity-logos-storybook exec playwright install chromium`, then run
`pnpm test:browser`. While developing, `pnpm dev` exposes the same tests
interactively through the testing panel in the Storybook UI.

## Releasing

Releases are managed with [Changesets](https://github.com/changesets/changesets).

When you make a change that should be released, add a changeset to your pull
request:

```sh
pnpm changeset
```

Once pull requests with changesets are merged into `main`, a "Version Packages"
pull request is opened (and kept up to date) that bumps the package version and
updates its changelog. Merging that pull request publishes the package to npm
through the
[`Release` workflow](https://github.com/sanity-io/logos/actions/workflows/release.yml),
which uses npm [Trusted Publishing](https://docs.npmjs.com/trusted-publishers)
(OIDC). Releases from `main` are published under the `latest` dist-tag.
