import React, { useEffect } from 'react'
import { useUser } from "../../../hooks"
import { HeaderPage } from "../../../components/admin";


export const UserAdmin = () => {

    const { loading, users, getUsers } = useUser();

    console.log('users --->', users);

    useEffect(() => {
        getUsers();
    }, []);

    return (

        <>
            <HeaderPage title="Usuarios" btnTitle="Nuevo usuario"/>
            <h1>User Admin Component</h1>
        </>
        
    )

}
