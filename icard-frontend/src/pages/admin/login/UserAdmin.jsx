import React, { useEffect } from 'react'
import { useUser } from "../../../hooks"

export const UserAdmin = () => {

    const { loading, users, getUsers } = useUser();

    console.log('users --->', users);

    useEffect(() => {
        getUsers();
    }, []);

    return (

        <div>
            <h1>User Admin Component</h1>
        </div>
        
    )

}
