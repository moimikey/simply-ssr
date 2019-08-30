import * as React from 'react'
import { Router } from '@reach/router'
import { Home } from './Home'

export function Application () {
  return (
    <React.Fragment>
      <Router>
        <Home path='/' default />
      </Router>
    </React.Fragment>
  )
}
