# @sanity/logos

The Sanity and GROQ logos as React components.

[![npm version](https://img.shields.io/npm/v/@sanity/logos.svg?style=flat-square)](https://www.npmjs.com/package/@sanity/logos)

This pnpm workspace contains the published [`@sanity/logos`](packages/logos) package and the
[Storybook](apps/storybook) that showcases it.

## Usage

```sh
npm install @sanity/logos

# Install peer dependencies
npm install react
```

```jsx
import {SanityLogo} from '@sanity/logos'

function App() {
  return <SanityLogo style={{fontSize: 72}} />
}
```

## Requirements

- Node.js `>=22.13`
- [pnpm](https://pnpm.io) `12` (pinned via `packageManager` in `package.json`)

## Getting started

```sh
pnpm install
pnpm build
```

### Development

```sh
pnpm dev          # Storybook at http://localhost:6006
```

In the workspace, `@sanity/logos` resolves to TypeScript source through package `exports`, so
Storybook hot-reloads edits to `packages/logos/src` without a rebuild.

### Common scripts

| Script              | What it does                                      |
| ------------------- | ------------------------------------------------- |
| `pnpm build`        | Build `@sanity/logos`                             |
| `pnpm test:browser` | Storybook browser tests (Chromium via Playwright) |
| `pnpm lint`         | Lint + type-check (oxlint)                        |
| `pnpm format`       | Format with oxfmt                                 |
| `pnpm knip`         | Unused files / dependencies / exports             |
| `pnpm changeset`    | Add a changeset for a release                     |

## Contributing & releasing

See [CONTRIBUTING.md](CONTRIBUTING.md). Releases use
[Changesets](https://github.com/changesets/changesets): add a changeset on your
PR; merging to `main` opens a “Version Packages” PR that publishes to npm when
merged.

## License

MIT — see [LICENSE](LICENSE).
