import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { map, size, forEach } from "lodash"
import { useOrder, useTable } from '../../hooks'
import { OrderHistoryItem } from '../../components/client'
import { Button } from 'semantic-ui-react'

export const OrdersHistory = () => {

    const { loading, orders, getOrderByTable } = useOrder()
    const { getTableByNumber } = useTable()
    const { tableNumber } = useParams()

    const getTableInfo = async() => {

        const table = await getTableByNumber(tableNumber)
        const idTable = table[0].id
        getOrderByTable(idTable, "", "ordering=-status,-created_at")

    }

    useEffect(() => {
        getTableInfo()
    }, [])

    console.log(orders)
    
    return (

        <div>
            <h1>Historial de pedidos</h1>

            {
                loading ? (
                    <p>Cargando</p>
                ) : (
                    <>
                    {
                        size(orders) > 0 && (
                            <Button primary fluid>
                                Pedir la cuenta
                            </Button>
                        )
                    }
                    {
                        map( orders, ( order ) => (
                            <OrderHistoryItem key={ order.id } order={ order } />
                        ) )
                    }
                    </>
                )
            }

        </div>
    )

}
