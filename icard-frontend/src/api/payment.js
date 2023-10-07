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
        
        const statusFilter = `statusPayment=${PaymentStatus.PENDIENTE}`
        const tableFilter = `table=${ id }`

        const url = `${BASE_PATH}/api/pedidos/?${tableFilter}&${statusFilter}`
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