import React, { useState, useEffect } from 'react'
import { Label, Button, Icon, Checkbox } from 'semantic-ui-react'
import { getOrderByTableAPI } from '../../../../api/orders'
import { OrderStatus } from '../../../../utils/constants'
import tablesvg from '../../../../assets/table.svg'
import "./TableItem.scss"


export const TableItem = ({ table }) => {

    useEffect(() => {
        (async () => {
            console.log(table.id)
            const response = await getOrderByTableAPI(table.id, OrderStatus.PENDIENTE)
            console.log(response)
        })()
    })

    return (
        <div className="table-item">
            <img src={ tablesvg } alt="" />
            <p>Mesa { table.number }</p>
        </div>
    )

}
