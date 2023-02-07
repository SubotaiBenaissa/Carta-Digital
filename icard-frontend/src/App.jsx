import React from 'react'
import { Button } from 'semantic-ui-react'
import { ClientLayout } from './layouts' 

export const App = () => {
  return (
    <ClientLayout>
      <div>
        <h1>The pepe correctly</h1>
        <Button primary> Holaaa </Button>
      </div>
    </ClientLayout>
  )
}

