import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { useOrder, useTable } from '../../hooks'

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
        </div>
    )

}
