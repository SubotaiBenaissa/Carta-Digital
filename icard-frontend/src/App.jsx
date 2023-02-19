import React from 'react'
import { ToastContainer } from 'react-toastify'
import { Navigation } from './routes/Navigation'

export const App = () => {
  return (
    <div>
      <Navigation />
      <ToastContainer 
        position="bottom-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover={false}
      />  
    </div>
  )
}

