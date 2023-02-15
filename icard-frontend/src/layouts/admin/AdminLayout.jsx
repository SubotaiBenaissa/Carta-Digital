import React from 'react'
import { LoginAdmin } from "../../pages"
import './AdminLayout.scss'

export const AdminLayout = ({ children }) => {

    const auth = null

    if(!auth) return <LoginAdmin />

    return (
        <div>
            <h1>Admin Layout</h1>
            { children }
        </div>
    )
    
}
