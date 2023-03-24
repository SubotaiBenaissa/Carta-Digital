import React, { useEffect } from 'react'
import { Loader } from "semantic-ui-react"
import { useUser } from "../../../hooks"
import { HeaderPage, TableUsers } from "../../../components/admin";


export const UserAdmin = () => {

    const { loading, users, getUsers } = useUser();

    console.log('users --->', users);

    useEffect(() => {
        getUsers();
    }, []);

    return (

        <>
            <HeaderPage title="Usuarios" btnTitle="Nuevo usuario"/>
            { loading ? (
                <Loader active inline="centered">
                    Cargando... 
                </Loader>
            ): (
                <TableUsers users={ users }/>
            )}
        </>
        
    )

}
