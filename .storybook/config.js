import { configure } from '@storybook/react';

const req = require.context('../app/components', true, /\.stories.js$/);
const req1 = require.context('../app/containers/AccountNavigator', true, /\.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
  req1.keys().forEach(filename => req(filename));
}
// automatically import all files ending in *.stories.js
configure(loadStories, module);
