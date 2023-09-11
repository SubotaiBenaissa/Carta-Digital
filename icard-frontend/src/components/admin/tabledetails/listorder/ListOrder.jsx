import React from 'react'
import { map } from "lodash"
import { OrderItem } from "../"
import "./ListOrder.scss"

export const ListOrder = ({ orders }) => {

    return (

        <div className="list-orders-admin">
            {
                map(orders, ( order ) => (
                    <OrderItem key={ order.id } order={ order }/>
                ))
            }
        </div>

    )

}
