import * as React from 'react'
import { Helmet } from 'react-helmet'
import { Router } from '@reach/router'
import Home from './Home'

function App () {
  return (
    <div>
      <Helmet defaultTitle='Welcome'>
        <meta charSet='utf-8' />
      </Helmet>
      <Router>
        <Home path='/' />
      </Router>
    </div>
  )
}

export default App
