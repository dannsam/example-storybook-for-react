import { configure, getStorybook, setAddon } from '@storybook/react';
import 'todomvc-app-css/index.css'
import 'storybook-chromatic';
import createPercyAddon from '@percy-io/percy-storybook';
const { percyAddon, serializeStories } = createPercyAddon();

setAddon(percyAddon);

function loadStories() {
  require('../components/stories/');
}

configure(loadStories, module);
serializeStories(getStorybook);
