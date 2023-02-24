import { useState, useEffect, createContext } from 'react'
import { setToken } from "../api/token"
import { useUser } from "../hooks"

export const AuthContext = createContext({
    auth: undefined,
    login: () => null,
    logout: () => null,   
});

export const AuthProvider = ({ children }) => {

    const { getMe } = useUser();

    const login = async ( token ) => {
        setToken(token)
        const Me = await getMe(token); 
        console.log(Me)
        // console.log('Context login', token);
    }

    const valueContext = {
        auth: null,
        login,
        logout: () => console.log("Cerrando sesión")
    }

    return (
        <AuthContext.Provider value={valueContext}>
            { children }
        </AuthContext.Provider>
    )
}

