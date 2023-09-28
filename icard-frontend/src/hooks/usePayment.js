import { useState } from "react"
import { createPaymentAPI } from "../api/payment"

export function usePayment() {

    const [error, setError] = useState(null)

    const createPayment = async(paymentData) => {

        try {

            return await createPaymentAPI(paymentData)
            
        } catch (error) {
            
            setError(error)

        }

    }

    return {

        error,
        createPayment

    }

}