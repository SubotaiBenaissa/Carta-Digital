import React, { useEffect } from 'react'
import { Loader } from "semantic-ui-react"
import { useOrder } from "../../hooks"
import { HeaderPage } from "../../components/admin"
import { useParams } from "react-router-dom"

export const TableDetails = () => {

    const { id } = useParams()
    const { loading, orders, getOrderByTable } = useOrder()

    useEffect(() => {
        getOrderByTable(id)
    }, [])

    console.log(orders)
    
    return (
        <HeaderPage title="Mesa">
            {
                loading ? (
                    <Loader active inline="centered">
                        Cargando...
                    </Loader>
                ) : (
                    <h2>Lista pedidos</h2>
                )
            }
        </HeaderPage>
    )

}
