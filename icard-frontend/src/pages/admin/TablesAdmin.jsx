import React, { useEffect } from 'react'
import { HeaderPage } from '../../components/admin'
import { useTable } from '../../hooks'
import { Loader } from 'semantic-ui-react'

export const TablesAdmin = () => {

    const { tables, loading, getTables } = useTable()

    useEffect(() => {
        
        getTables()

    }, [])
    
    console.log(tables)

    return (

        <>
            <HeaderPage title="Mesas" btnTitle="Crear nueva mesa"/>
            {
                loading ? (
                    <Loader active inline="centered">
                        Cargando...
                    </Loader>
                ) : (
                    <h2>Listado de mesas</h2>
                )
            }    
        </>

    )

}
