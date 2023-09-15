import React, { useState, useEffect } from 'react'
import { Loader } from "semantic-ui-react"
import { useOrder } from "../../hooks"
import { HeaderPage } from "../../components/admin"
import { ListOrder } from "../../components/admin"
import { useParams } from "react-router-dom"

export const TableDetails = () => {

    const [reloadOrders, setReloadOrders] = useState(false)
    const { id } = useParams()
    const { loading, orders, getOrderByTable } = useOrder()

    const onReloadOrders = () => {
        setReloadOrders((prev) => !prev)
    }

    useEffect(() => {
        getOrderByTable(id, "", "ordering=-status,created_at")
    }, [reloadOrders])
    
    return (
        <>
            <HeaderPage title={"Mesa"} />
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
