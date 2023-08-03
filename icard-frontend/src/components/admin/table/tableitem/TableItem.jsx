import React, { useState, useEffect } from 'react'
import { size } from 'lodash'
import classNames from "classnames"
import { Label, Button, Icon, Checkbox } from 'semantic-ui-react'
import { getOrderByTableAPI } from '../../../../api/orders'
import { OrderStatus } from '../../../../utils/constants'
import tablesvg from '../../../../assets/table.svg'
import "./TableItem.scss"


export const TableItem = ({ table }) => {
    
    const [orders, setOrders] = useState([])

    useEffect(() => {
        (async () => {
            const response = await getOrderByTableAPI(table.number, OrderStatus.PENDIENTE)
            setOrders(response)
        })()
    }, [])

    return (
        <div className="table-item">
            {
                size(orders) > 0 ? (
                    <Label circular color="orange">
                        { size(orders) }
                    </Label>
                ) : null
            }
            <img src={ tablesvg } className={classNames({
                pendiente: size(orders) > 0
            })} />
            <p>Mesa { table.number }</p>
        </div>
    )

}
