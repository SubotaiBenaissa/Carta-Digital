import React, { useEffect } from 'react'
import { HeaderPage, TableComponent } from '../../components/admin'
import { useTable } from '../../hooks'
import { Loader } from 'semantic-ui-react'

export const TablesAdmin = () => {

    const { tables, loading, getTables } = useTable()

    useEffect(() => {
        
        getTables()

    }, [])

    return (

        <>
            <HeaderPage title="Mesas" btnTitle="Crear nueva mesa"/>
            {
                loading ? (
                    <Loader active inline="centered">
                        Cargando...
                    </Loader>
                ) : (
                    <TableComponent tables={ tables } />
                )
            }    
        </>

    )

}
