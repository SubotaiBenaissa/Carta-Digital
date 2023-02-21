import { useState, useEffect, createContext } from 'react'

export const AuthContext = createContext({
    auth: undefined,
    login: () => null,
    logout: () => null,   
});

export const AuthProvider = ({ children }) => {

    const valueContext = {
        auth: null,
        login: () => console.log("Relizando login"),
        logout: () => console.log("Cerrando sesión")
    }

    return (
        <AuthContext.Provider value={valueContext}>
            { children }
        </AuthContext.Provider>
    )
}
