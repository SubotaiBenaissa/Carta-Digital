import React from 'react'
import { map } from "lodash"
import { OrderItem } from "../"
import "./ListOrder.scss"

export const ListOrder = ({ orders, onReloadOrders }) => {

    return (

        <div className="list-orders-admin">
            {
                map(orders, ( order ) => (
                    <OrderItem key={ order.id } order={ order } onReloadOrders={ onReloadOrders }/>
                ))
            }
        </div>

    )

}
