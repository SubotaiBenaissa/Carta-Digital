import React, { useEffect } from 'react'
import { Loader } from "semantic-ui-react"
import { useOrder } from "../../hooks"
import { HeaderPage } from "../../components/admin"
import { ListOrder } from "../../components/admin"
import { useParams } from "react-router-dom"

export const TableDetails = () => {

    const { id } = useParams()
    const { loading, orders, getOrderByTable } = useOrder()

    useEffect(() => {
        getOrderByTable(id)
    }, [])

    console.log(orders)
    console.log(loading)
    
    return (
        <>
            <HeaderPage title={"Mesa"} />
                {
                    loading ? (
                        <Loader active inline="centered">
                            Cargando...
                        </Loader>
                    ) : (
                        <ListOrder orders={ orders } />
                    )
                }
        </>
    )

}
