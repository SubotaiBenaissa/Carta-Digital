import React from 'react'
import { ToastContainer } from 'react-toastify'
import { Navigation } from './routes/Navigation'
import { AuthProvider } from "./context"

export const App = () => {
  return (
    <AuthProvider>
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
    </AuthProvider>
  )
}

