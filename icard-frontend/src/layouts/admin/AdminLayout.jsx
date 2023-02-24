import React from 'react'
import { LoginAdmin } from "../../pages"
import { useAuth } from "../../hooks"
import './AdminLayout.scss'

export const AdminLayout = ({ children }) => {

    console.log(useAuth());
    const { auth } = useAuth();

    if(!auth) return <LoginAdmin />

    return (
        <div>
            <h1>Admin Layout</h1>
            { children }
        </div>
    )
    
}
