import { useState, useEffect, createContext } from 'react'
import { setToken, getToken, removeToken } from "../api/token"
import { useUser } from "../hooks"

export const AuthContext = createContext({
    auth: undefined,
    login: () => null,
    logout: () => null,   
});

export const AuthProvider = ({ children }) => {

    const authToken = async() => {

        const token = getToken()

            if(token) {
                const me = await getMe(token)
                setAuth({ token, me })
            } else {
                setAuth(null);
            }

    }

    const [auth, setAuth] = useState(undefined)
    const { getMe } = useUser();

    useEffect(() => {
        
        authToken();

    }, [])
    

    const login = async ( token ) => {
        setToken(token)
        const Me = await getMe(token); 
        setAuth({ token, Me });
        // console.log('Context login', token);
    }

    const logout = () => {

        if(auth) {
            removeToken();
            setAuth(null)
        }

    }

    const valueContext = {
        auth,
        login,
        logout
    }

    if( auth === undefined ) return null;

    return (
        <AuthContext.Provider value={valueContext}>
            { children }
        </AuthContext.Provider>
    )
}

