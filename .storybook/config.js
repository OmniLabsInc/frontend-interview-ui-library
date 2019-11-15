import { configure, addParameters, addDecorator } from '@storybook/react'
import requireContext from 'require-context.macro'
import React from 'react'
import JssProvider from 'react-jss/lib/JssProvider'

// automatically import all files ending in *.stories.jsx
// we are using a custom requireContext needed for storyshots (https://github.com/storybookjs/storybook/tree/master/addons/storyshots/storyshots-core)
const req = requireContext('../src/stories/', true, /\.stories\.jsx$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

// this will allow us to have a standard name for css classes, i.e. snapshots will always be the same
const generateClassName = (rule, styleSheet) =>
  `${styleSheet.options.classNamePrefix}`

addDecorator(story => (
  <JssProvider generateClassName={generateClassName}>{story()}</JssProvider>
))

addParameters({
  options: {
    name: 'Frontend Interview UI Library',
    isFullscreen: false,
    showPanel: true,
  },
})

configure(loadStories, module)
