import React from 'react'
import { Button, Image } from 'semantic-ui-react'
import { OrderStatus } from "../../../../utils/constants"
import moment from "moment"
import "moment/dist/locale/es"
import classNames from 'classnames'
import "./OrderItem.scss"

export const OrderItem = ({ order }) => {

    const { title, image } = order.product_data;

    return (
        <div className={classNames("order-item-admin", {
            [order.status.toLowerCase()]: true
        })}>
            <div className="order-item-admin__time">
                <span>
                    {
                        moment(order.created_at).format("HH:mm")
                    }
                </span>
                { " - " }
                <span>
                    {
                        moment(order.created_at).startOf('seconds').fromNow()
                    }
                </span>
            </div>
            <div className="order-item-admin__product">
                <Image src={ image } />
                <p>{ title }</p>
            </div>
            {
                order.status === OrderStatus.PENDIENTE ? (
                    <Button primary onClick={() => console.log("Marcar como entregado")}>
                        Marcar como entregado
                    </Button>
                ) : (
                    <span>Entregado</span>
                )
            }
        </div>
    )

}
