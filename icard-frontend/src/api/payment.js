import { BASE_PATH, PaymentStatus } from "../utils/constants";

export async function createPaymentAPI( paymentData ) {

    try {

        const url = `${BASE_PATH}/api/pagos/`
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(paymentData)
        }

        const response = await fetch(url, params);
        const result = await response.json()
        return result
        
    } catch (error) {
        
        throw error

    }

}

export async function getPaymentByTableAPI(id) {

    try {
        
        const statusFilter = `estadoPago=${PaymentStatus.PENDIENTE}`
        const tableFilter = `mesa=${ id }`

        const url = `${BASE_PATH}/api/pagos/?${tableFilter}&${statusFilter}`
        const params = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        const response = await fetch(url, params)
        const result = await response.json()
        return result

    } catch (error) {
        throw error;
    }

}

export async function closePaymentAPI(idPayment) {

    try {
        
        const url = `${BASE_PATH}/api/pagos/${idPayment}/`;
        const params = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                estadoPago: PaymentStatus.PAGADO
            })
        }

        await fetch(url, params)

    } catch (error) {

        throw error
    
    }

}

export async function getPaymentsAPI() {

    try {
        
        const paymentFilter = `estadoPago=${PaymentStatus.PAGADO}`
        const orderingFilter = 'ordering=created_at'
        const url = `${BASE_PATH}/api/pagos/?${paymentFilter}&${orderingFilter}`

        const response = await fetch(url)
        const result = await response.json()
        return result

    } catch (error) {
        throw error
    }

}