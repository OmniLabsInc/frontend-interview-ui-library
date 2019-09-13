import React from 'react'
import { render } from 'react-dom'
import { Logo } from './lib'

const App = () => (
  <div>
    <Logo />
    <h1>Hello React</h1>
  </div>
)

render(<App />, document.getElementById('root'))
