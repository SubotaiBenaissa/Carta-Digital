import React from 'react'
import { map } from "lodash"
import "./ListOrder.scss"

export const ListOrder = ({ orders }) => {

    return (

        <div className="list-orders-admin">
            {
                map(orders, ( order ) => (
                    <h2 key={ order.id }>Pedido...</h2>
                ))
            }
        </div>

    )

}
