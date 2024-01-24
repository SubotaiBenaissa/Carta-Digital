import { useState } from "react"
import { createPaymentAPI, getPaymentByTableAPI, closePaymentAPI, getPaymentsAPI } from "../api/payment"

export function usePayment() {

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [payments, setPayments] = useState(null)

    const createPayment = async(paymentData) => {

        try {

            return await createPaymentAPI(paymentData)
            
        } catch (error) {
            
            setError(error)

        }

    }

    const getPaymentByTable = async(id) => {

        try {
            
            return await getPaymentByTableAPI(id);

        } catch (error) {
            
            setError(error)

        }

    }

    const closePayment = async(idPayment) => {

        try {
            
            await closePaymentAPI(idPayment)

        } catch (error) {

            setError(error)
        
        }

    }

    const getPayments = async(idPayment) => {

        try {
            
            setLoading(true)
            const response = await getPaymentsAPI()
            setLoading(false)
            setPayments(response)

        } catch (error) {
            
            setLoading(false)
            setError(error)

        }

    }

    return {

        error,
        payments,
        loading,
        getPayments,
        createPayment,
        getPaymentByTable,
        closePayment

    }

}