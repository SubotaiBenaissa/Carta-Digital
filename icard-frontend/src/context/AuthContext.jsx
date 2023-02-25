import { useState, useEffect, createContext } from 'react'
import { setToken, getToken } from "../api/token"
import { useUser } from "../hooks"

export const AuthContext = createContext({
    auth: undefined,
    login: () => null,
    logout: () => null,   
});

export const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState(undefined)
    const { getMe } = useUser();

    useEffect(() => {
        
        (async () => {

            const token = getToken()

            if(token) {
                const me = await getMe(token)
                setAuth({ token, me })
                console.log(token, me)
            } else {
                setAuth(null);
            }

        })();

    }, [])
    

    const login = async ( token ) => {
        setToken(token)
        const Me = await getMe(token); 
        setAuth({ token, Me });
        console.log(Me)
        // console.log('Context login', token);
    }

    const valueContext = {
        auth,
        login,
        logout: () => console.log("Cerrando sesión")
    }

    if( auth === undefined ) return null;

    return (
        <AuthContext.Provider value={valueContext}>
            { children }
        </AuthContext.Provider>
    )
}

