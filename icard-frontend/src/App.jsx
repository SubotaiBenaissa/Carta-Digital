import React from 'react'
import { Button } from 'semantic-ui-react'
import { Navigation } from './routes/Navigation'

export const App = () => {
  return (
    <div>
      <Navigation />
      <h1>The pepe correctly</h1>
      <Button primary> Holaaa </Button>
    </div>
  )
}

