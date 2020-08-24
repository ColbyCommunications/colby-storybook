# Colby Storybook

A demo repository and development framework for Colby UI components.

## Component Development

The best way to develop and live test new components is to do it within this [Storybook](https://github.com/ColbyCommunications/colby-storybook) repo. Here are the steps to get up and running:

1. Change `"name": "@colbycommunications/colby-[something]-component",` in package.json to your component name
2. Run `yarn link` or `npm link`
3. `cd /path/to/colby-storybook`
4. Make a new folder for your component under `src` and give it the same name as your component repo. For example, colby-[something]-component
5. Copy the `index.stories.js` file from one of the other components.
6. Import your component like so: `import Component from '@colbycommunications/colby-[something]-component';`
7. Add your demos
