import React, { useEffect } from 'react'
import { Loader } from 'semantic-ui-react';
import { HeaderPage } from "../../components/admin"
import { useTable } from "../../hooks";

export const OrdersAdmin = () => {

    const { loading, tables, getTables } = useTable()

    useEffect(() => {

        getTables()

    }, [])
    

    return (
        <>
            <HeaderPage title="Restaurante" />
            {
                loading ? (
                    <Loader active inline="centered">
                        Cargando...
                    </Loader>
                ) : (
                    <h2>Lista mesas</h2>
                )
            }
        </>
    )

}
