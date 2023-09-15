import React, { useState, useEffect } from 'react'
import { Loader } from "semantic-ui-react"
import { useOrder, useTable } from "../../hooks"
import { HeaderPage } from "../../components/admin"
import { ListOrder } from "../../components/admin"
import { useParams } from "react-router-dom"

export const TableDetails = () => {

    const [reloadOrders, setReloadOrders] = useState(false)
    const { id } = useParams()
    const { loading, orders, getOrderByTable } = useOrder()
    const { table, getTable } = useTable()

    console.log(table)

    const onReloadOrders = () => {
        setReloadOrders((prev) => !prev)
    }

    useEffect(() => {
        getTable(id)
    }, [ id ])
    

    useEffect(() => {
        getOrderByTable(id, "", "ordering=-status,created_at")
    }, [id, reloadOrders])
    
    return (
        <>
            <HeaderPage title={`Mesa ${ table?.number || "" }`} />
                {
                    loading ? (
                        <Loader active inline="centered">
                            Cargando...
                        </Loader>
                    ) : (
                        <ListOrder orders={ orders } onReloadOrders={ onReloadOrders } />
                    )
                }
        </>
    )

}
