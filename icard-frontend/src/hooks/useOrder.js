import { useState } from "react";
import { getOrderByTableAPI, checkDeliveredOrderAPI } from "../api/orders"

export function useOrder() {

    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(false)
    const [orders, setOrders] = useState(null)

    const getOrderByTable = async(id, status, ordering) => {

        try {

            setLoading(true)
            const response = await getOrderByTableAPI(id, status, ordering)
            setLoading(false)
            setOrders(response)
            
        } catch (error) {

            setLoading(false)
            setErrors(error)

        }

    }

    const checkDeliveredOrder = async(idOrder) => {

        try {

            await checkDeliveredOrderAPI(idOrder)

        } catch(error) {

            setErrors(error)

        }

    }

    return { 
        loading,
        errors,
        orders,
        getOrderByTable,
        checkDeliveredOrder
    }

}