import React, { useState, useEffect } from 'react'
import './PaymentDetails.scss'
import { map } from 'lodash'
import { Image } from 'semantic-ui-react'
import { useOrder } from '../../../../hooks/useOrder'

export const PaymentDetails = ({ payment }) => {

    const { getOrderByPayment } = useOrder();
    const [orders, setOrders] = useState([])

    useEffect(() => {
        (async () => {
            const response = await getOrderByPayment(payment.id);
            setOrders(response)
        })()
    })

    return (
        <div className="payment-product-list">
            {
                map(orders, (order) => (
                    <div className="payment-product-list__product" key={ order.id }>
                        <div>
                            <Image src={ order.product_data.image } avatar size="tiny" />
                        </div>
                    </div>
                ))
            }
        </div>
    )

}
