import * as React from 'react'
import { Helmet } from 'react-helmet'
import { Switch, Route, Redirect } from 'react-router-dom'
import ErrorBoundary from './ErrorBoundary'
import Home from './Home'

function App () {
  return (
    <React.Fragment>
      <ErrorBoundary>
        <Helmet defaultTitle='Welcome'>
          <meta charSet='utf-8' />
        </Helmet>
        <ErrorBoundary>
          <Switch>
            <Route exact path='/' component={Home} />
            <Redirect to='/' />
          </Switch>
        </ErrorBoundary>
      </ErrorBoundary>
    </React.Fragment>
  )
}

export default App
