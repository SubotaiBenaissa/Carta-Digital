import { useState } from "react";
import { getOrderByTableAPI, checkDeliveredOrderAPI, addOrderToTableAPI, addPaymentToOrderAPI, closeOrderAPI } from "../api/orders"

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

    const addOrderToTable = async(idTable, idProduct) => {

        try {

            await addOrderToTableAPI(idTable, idProduct)
            
        } catch (error) {
            
            setErrors(error)

        }

    }

    const addPaymentToOrder = async(idOrder, idPayment) => {

        try {

            await addPaymentToOrderAPI(idOrder, idPayment)
            
        } catch (error) {
            
            setErrors(error)

        }

    }



    return { 
        loading,
        errors,
        orders,
        getOrderByTable,
        addOrderToTable,
        checkDeliveredOrder,
        addPaymentToOrder
    }

}