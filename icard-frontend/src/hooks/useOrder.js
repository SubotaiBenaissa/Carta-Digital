import { useState } from "react";
import { getOrderByTableAPI } from "../api/orders"

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

    return { 
        loading,
        errors,
        orders,
        getOrderByTable
    }

}