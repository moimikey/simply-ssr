import * as React from 'react'
import { Helmet } from 'react-helmet'
// import CreateComposer from 'render-prop-composer'

// const composer = CreateComposer(React.createElement, React.Fragment)
// const Composed = composer(ContainerOne, ContainerTwo)

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
