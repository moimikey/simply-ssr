import * as React from 'react'
import { Helmet } from 'react-helmet'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './Home'

function App () {
  return (
    <div>
      <Helmet defaultTitle='Welcome'>
        <meta charSet='utf-8' />
      </Helmet>
      <Switch>
        <Route exact path='/' component={Home} />
        <Redirect to='/' />
      </Switch>
    </div>
  )
}

export default App
