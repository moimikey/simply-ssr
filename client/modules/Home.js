import * as React from 'react'
import { Helmet } from 'react-helmet'

function Home () {
  return (
    <React.Fragment>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1>Hello world.</h1>
    </React.Fragment>
  )
}

export default Home
