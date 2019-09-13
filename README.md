# Frontend Interview UI Library

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and contains a storybook where you will be able to interact with every components. It also contains a React app (`src/index.jsx`) if you need to do manual test inside a React app.

## Tests

### Structural Tests

Those tests are here to ensure the component HTML structure does not change from one version to another.
We are using the Storybook addon `storyshots` to create Jest snapshot automatically from the Storybooks stories. It will save the HTML structure of the UI component into a snapshot file, and then, everytime you want to update it, it will compare against this snapshot to see if there is any difference. So not so much to do here, just write your stories and the addon will do the rest for you.

### Interaction Tests

We want to utilize Enzyme for interaction tests. Enzyme allows 3 kinds of rendering for different kinds of test:

- shallow rendering: useful to constrain yourself to testing a component as a unit, and to ensure that your tests aren't indirectly asserting on behavior of child components
- full rendering: ideal for use cases where you have components that may interact with DOM APIs or need to test components that are wrapped in higher order components
- static rendering: generate HTML from your React tree, and analyze the resulting HTML structure, so very similar to Jest snapshots so we won't use this kind of rendering

Most of the time we will use [full rendering](https://airbnb.io/enzyme/docs/api/mount.html) with `import { mount } from 'enzyme'`

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.

### `yarn build`

Builds the app as an npm package to the `dist` folder.

### `yarn test`

Tests the app

### `yarn storybook`

Runs the storybook for interactions with the project.

## Interview Notes

- Feel free to use any design library for component designs. We use [Material-UI](https://material-ui.com).
- We might not be able to finish the complete issue. It's okay! We are trying to determine what thought process goes into developing this. The goal is to understand how we work together on problems.
- Let's share the screen and try to think out loud as you are solving the provided issue. Feel free to ask more clarifying questions as you go along.
