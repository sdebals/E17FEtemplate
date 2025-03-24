# Storyblok Next.js starter

This is an next.js starter that can be used as an accelerator for Storyblok and Commercetools related projects.

The main concepts behind the starter are:

- Using a monorepo approach with `turborepo` with `apps` and `packages`
- UI components are agnostic of the CMS (Storyblok)
- UI components can be visualized and tested in isolation using Storybook
- UI component generator via turbo:generator commands
- Specific functionalities (e.g. fetching data from the CMS) are implemented in the corresponding package
- Configurations (eslint, typescript, tailwind) are defined in their own packages
- Storyblok package provides fetching functions that are tied with next.js fetch caching
- Best practices in terms of data fetching with next.js and Storyblok API

Please keep in mind that all components in the UI package are provided as an example, and for a full project implementation,
they should be replaced with the required project components.

## Using the repo

Run the following command:

```sh
cd nextjs-typescript-template
pnpm install
```

In order to continue to use all the functionalities and run the next.js app, you need to have access to Storyblok sandbox,
and retrieve an access token.

```sh
cd apps/web
cp .env.example .env # and add yout Storyblok variables
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo
- `@repo/storyblok`: fetch functions, rich-text handling and other utilities to develop with Storyblok
- `@repo/commercetools`: Commercetools specific features
- `@repo/search`: `algolia` utilities

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```sh
cd nextjs-typescript-template
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```sh
cd my-turborepo
```

If you want to run all apps at once execute:

```sh
pnpm run dev
```

If you want to run separately (e.g. different terminal tabs) you can execute:

```sh
# nextjs web app
pnpm run web
```

```sh
# storybook app
pnpm run storybook
```

When running the next.js app, ideally in dev mode we should enable next.js draft-mode, so, caches are bypassed
and we get allways the latest saved content. To do that just open in the browser https://localhost:3000/api/draft?secret=changeme&slug= where your secret is controlled via `.env`

To disable draft-mode, click on the `Exit preview` button located in the bottom left corner.

Please note that to fully test caching behaviours of next.js (and if using unstable cache) dev mode cannot be used, we need to `build` and `start`.

### Packages specific commands

#### Storyblok

If Storyblok components have changes (or new components are added) it's required to pull and generate types:

If you are not logged-in with Storyblok cli:

```sh
# login in your Storyblok space
storyblok login
```

then you can run:

```sh
# Pull components (saved in packages/storyblok/generated/components.302698.json)
pnpm run sb:pull-components
# Generate typescript types (saved in packages/storyblok/generated/component-types-sb.d.ts)
pnpm run sb:generate-types
```

#### UI Package

There are generators to quickly generate a full UI component and the Storybook corresponding story:

```sh
cd packages/ui
pnpm run generate:component
```

Provide location, client/server component, name and it will generate component, story and update export in package.json

## Useful Links

- [Nextjs Performance guidelines](https://kb.epam.com/display/RDPE/Next.js+general+guidelines)
- [Turborepo docs](https://turbo.build/repo/docs)
- [Storyblok with next.js](https://www.storyblok.com/tc/nextjs)
- [Nextjs docs](https://nextjs.org/docs)
- [Storybook docs](https://storybook.js.org/docs)
