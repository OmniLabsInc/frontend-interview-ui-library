import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, select } from '@storybook/addon-knobs'

import Logo from '../lib/Logo'

const stories = storiesOf('Logo', module)

stories.addDecorator(withKnobs)

stories.add('default', () => (
  <Logo color={select('color', ['blue', 'white', 'black'], 'blue')} />
))
