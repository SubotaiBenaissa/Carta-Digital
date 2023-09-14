import React from 'react'
import { Button, Image } from 'semantic-ui-react'
import classNames from 'classnames'
import "./OrderItem.scss"

export const OrderItem = ({ order }) => {

    const { title, image } = order.product_data;

    return (
        <div className={classNames("order-item-admin", {
            [order.status.toLowerCase()]: true
        })}>
            <div className="order-item-admin__time">
                {
                    order.created_at
                }
            </div>
            <div className="order-item-admin__product">
                <Image src={ image } />
                <p>{ title }</p>
            </div>
        </div>
    )

}
