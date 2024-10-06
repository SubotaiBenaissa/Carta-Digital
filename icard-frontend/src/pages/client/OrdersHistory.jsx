import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { map, size, forEach } from "lodash"
import { useOrder, useTable, usePayment } from '../../hooks'
import { OrderHistoryItem } from '../../components/client'
import { ModalConfirm } from "../../components/common"
import { Button } from 'semantic-ui-react'

export const OrdersHistory = () => {

    const { loading, orders, getOrderByTable, addPaymentToOrder } = useOrder()
    const [idTable, setIdTable] = useState(null)
    const [showTypePayment, setShowTypePayment] = useState(false)
    const { getTableByNumber } = useTable()
    const { tableNumber } = useParams()
    const { createPayment } = usePayment()

    const getTableInfo = async() => {

        const table = await getTableByNumber(tableNumber)
        const idTableTemp = table[0].id
        setIdTable(idTableTemp)
        getOrderByTable(idTableTemp, "", "ordering=-status,-created_at")

    }

    useEffect(() => {
        getTableInfo()
    }, [])

    const onCreatePayment = async(paymentType) => {

        setShowTypePayment(false)
        let totalPayment = 0

        forEach(orders, (order) => {
            totalPayment += Number(order.product_data.price)
        })

        const paymentData = {
            mesa: idTable,
            totalPago: totalPayment.toFixed(2),
            tipoPago: paymentType,
            estadoPago: "PENDIENTE"
        }

        const payment = await createPayment(paymentData)
        for await (const order of orders) {
            await addPaymentToOrder(order.id, payment.id)
        }

        // window.location.reload()

    }
    
    return (

        <div>
            <h1>Historial de pedidos</h1>

            {
                loading ? (
                    <p>Cargando</p>
                ) : (
                    <>
                    {
                        size(orders) > 0 && (
                            <Button primary fluid onClick={ () => setShowTypePayment(true) }>
                                Pedir la cuenta
                            </Button>
                        )
                    }
                    {
                        map( orders, ( order ) => (
                            <OrderHistoryItem key={ order.id } order={ order } />
                        ) )
                    }
                    </>
                )
            }

            <ModalConfirm 
                title="Pagar con tarjeta o efectivo"
                show={ showTypePayment }
                onCloseText="Efectivo"
                onClose={ () => onCreatePayment("EFECTIVO") }
                onConfirmText="Tarjeta"
                onConfirm={ () => onCreatePayment("TARJETA") }
            />

        </div>
    )

}
