import React, { useEffect } from 'react'
import { HeaderPage } from '../../components/admin'
import { useTable } from '../../hooks'

export const TablesAdmin = () => {

    const { tables, loading, getTables } = useTable()

    useEffect(() => {
        
        getTables()

    }, [])
    
    console.log(tables)

    return (
        <div>
            <HeaderPage title="Mesas" btnTitle="Crear nueva mesa"/>
        </div>
    )

}
