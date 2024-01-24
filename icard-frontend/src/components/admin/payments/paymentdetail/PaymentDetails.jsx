import React, { useState, useEffect } from 'react'
import './PaymentDetails.scss'
import { useOrder } from '../../../../hooks/useOrder'

export const PaymentDetails = ({ payment }) => {

    const { getOrderByPayment } = useOrder();
    const [orders, setOrders] = useState(null)

    useEffect(() => {
        (async () => {
            const response = await getOrderByPayment(payment.id);
            console.log(response)
        })()
    })

    return (
        <div>
            <h2>Payment Details</h2>
        </div>
    )

}
