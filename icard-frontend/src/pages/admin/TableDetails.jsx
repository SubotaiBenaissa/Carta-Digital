import React, { useEffect } from 'react'
import { useOrder } from "../../hooks"
import { useParams } from "react-router-dom"

export const TableDetails = () => {

    const params = useParams()
    console.log(params)
    const { loading, orders, getOrderByTable } = useOrder()

    // useEffect(() => {
    //     getOrderByTable()
    // }, [])
    

    return (
        <div>
            <h2>Detalle de la mesa</h2>
        </div>
    )

}
