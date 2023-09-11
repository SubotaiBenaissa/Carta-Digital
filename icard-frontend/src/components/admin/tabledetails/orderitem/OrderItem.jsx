import React from 'react'
import { Button, Image } from 'semantic-ui-react'
import "./OrderItem.scss"

export const OrderItem = ({ order }) => {

    return (
        <div className="order-item">
            <div className="order-item-admin__time">
                {
                    order.created_at
                }
            </div>
        </div>
    )

}
