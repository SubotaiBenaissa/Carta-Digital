import { BASE_PATH, OrderStatus } from "../utils/constants";

export async function getOrderByTableAPI( id, status="", ordering="" ) {

    try {

        const tableFilter = `table=${ id }`
        const statusFilter = `status=${ status }`
        const closeFilter = `close=False`

        const url = `${ BASE_PATH }/api/pedidos/?${tableFilter}&${statusFilter}&${closeFilter}&${ordering}`
        const response = await fetch(url);
        const result = await response.json()
        return result
        
    } catch (error) {
        
        throw error

    }

}

export async function checkDeliveredOrderAPI(id) {

    try {

        const url = `${BASE_PATH}/api/pedidos/${id}/`
        const params = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                status: OrderStatus.ENTREGADO
            })
        }

        const response = await fetch(url, params);
        const result = await response.json();
        return result;

    } catch(error) {

        throw error
    
    }

}

export async function addOrderToTableAPI(idTable, idProduct) {

    try {

        const url = `${ BASE_PATH }/api/pedidos/`;
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                status: OrderStatus.PENDIENTE,
                table: idTable,
                product: idProduct
            })
        }

        await fetch(url, params)
        
    } catch (error) {

        throw error;
    
    }

}

export async function addPaymentToOrderAPI(idOrder, idPayment) {

    try {

        const url = `${BASE_PATH}/api/pedidos/${idOrder}/`;
        const params = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                payment: idPayment
            })
        }

        await fetch(url, params)
        
    } catch (error) {

        throw error
    
    }

}

export async function closeOrderAPI(idOrder) {

    try {
               
        const url = `${BASE_PATH}/api/pedidos/${idOrder}/`;
        const params = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                close: true
            })
        }

        await fetch(url, params)

    } catch (error) {
        
        throw error

    }

}

export async function getOrdersByPaymentAPI( idPayment ) {

    try {

        const paymentfilter = `payment=${ idPayment }`      
        const url = `${BASE_PATH}/api/pedidos/?${ paymentfilter }`
        const response = await fetch(url)
        const result = await response.json()
        return result

    } catch (error) {
        
    }

}