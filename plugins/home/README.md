# Home

Welcome to the home plugin!

_This plugin was created through the Backstage CLI_

## Overview

The Home plugin introduces a system for composing a Home Page for Backstage in order to surface relevant info and provide convenient shortcuts for common tasks. It's designed with composability in mind with an open ecosystem that allows anyone to contribute with any component, to be included in any Home Page.

For App Integrators, the system is designed to be composable to give total freedom in designing a Home Page that suits the needs of the organization. From the perspective of a Component Developer who wishes to contribute with building blocks to be included in Home Pages, there's a convenient interface for bundling the different parts and exporting them with both error boundary and lazy loading handled under the surface.

## Getting started

If you have a standalone app (you didn't clone this repo), then do

```bash
# From the Backstage repository root
cd packages/app
yarn add @backstage/plugin-home
```

### Setting up the Home Page

1. Create a Home Page Component that will be used for composition.

`packages/app/src/components/home/HomePage.tsx`

```tsx
import React from 'react';

export const HomePage = () => {
  return {
    /* TODO: Compose a Home Page here */
  };
};
```

2. Add a route where the homepage will live, presumably `/`.

`packages/app/src/App.tsx`

```tsx
import { HomepageCompositionRoot } from '@backstage/plugin-home';
import { HomePage } from './components/home/HomePage';

// ...
<Route path="/" element={<HomepageCompositionRoot />}>
  <HomePage />
</Route>;
// ...
```

### Creating Components

The Home Page can be composed with regular React components, so there's no magic in creating components to be used for composition 🪄 🎩 . However, in order to assure that your component fits into a diverse set of Home Pages, there's an extension creator for this purpose, that creates a Card-based layout, for consistency between components. The extension creator requires two fields: `title` and `content`. Additionally, you can optionally provide `settings`, `actions` and `contextProvider` as well. These parts will be combined to create a card, where the `content`, `actions` and `settings` will be wrapped within the `contextProvider` in order to be able to access to context and effectively communicate with one another.

Finally, the `createCardExtension` also accepts a generic, such that Component Developers can indicate to App Integrators what custom props their component will accept, such as the example below where the default category of the random jokes can be set.

```tsx
export const RandomJokeHomePageComponent = homePlugin.provide(
  createCardExtension<{ defaultCategory?: 'programming' | 'any' }>({
    title: 'Random Joke',
    content: () =>
      import('./homePageComponents/RandomJoke/Content').then(m => m.Content),
    actions: () =>
      import('./homePageComponents/RandomJoke/Actions').then(m => m.Actions),
    contextProvider: () =>
      import('./homePageComponents/RandomJoke/Context').then(
        m => m.ContextProvider,
      ),
    settings: () =>
      import('./homePageComponents/RandomJoke/Settings').then(m => m.Settings),
  }),
);
```

In summary: it is not necessary to use the `createCardExtension` extension creator to register a home page component, although it is convenient since it provides error boundary and lazy loading, and it also may hook into other functionality in the future.

### Composing a Home Page

Composing a Home Page is no different from creating a regular React Component, i.e. the App Integrator is free to include whatever content they like. However, there are components developed with the Home Page in mind, as described in the previous section. If created by the `createCardExtension` extension creator, they are rendered like so

```tsx
import React from 'react'
import Grid from '@material-ui/core/Grid'
import { RandomJokeHomePageComponent } from '@backstage/plugin-home';

export const HomePage = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <RandomJokeHomePageComponent>
      </Grid>
    </Grid>
  )
}
```

Additionally, the App Integrator is provided an escape hatch in case the way the card is rendered does not fit their requirements. They may optionally pass the `Renderer`-prop, which will receive the `title`, `content` and optionally `actions`, `settings` and `contextProvider`, if they exist for the component. This allows the App Integrator to render the content in any way they want.

## Contributing

We believe that people have great ideas for what makes a useful Home Page, and we want to make it easy for every to benefit from the effort you put in to create something cool for the Home Page. Therefore, a great way of contributing is by simply creating more Home Page Components, than can then be used by everyone when composing their own Home Page.

Additionally, the API is at a very early state, so contributing with additional use cases may expose weaknesses in the current solution that we may iterate on, to provide more flexibility and ease of use for those who wish to develop components for the Home Page.
