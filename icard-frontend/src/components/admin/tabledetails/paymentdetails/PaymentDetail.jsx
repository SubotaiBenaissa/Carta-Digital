import React from 'react'
import { Table, Button, Icon } from "semantic-ui-react"
import { usePayment, useOrder } from '../../../../hooks'
import "./PaymentDetail.scss"

export const PaymentDetail = ({ payment, orders, onClose, onReloadOrders }) => {

    const { closePayment } = usePayment();
    const { closeOrder } = useOrder();

    const getIconPayment = ( key ) => {

        if (key === "TARJETA") return "credit card outline"
        if (key === "EFECTIVO") return "money bill alternate outline"
        return null

    }

    const onCloseTable = async() => {

        const result = window.confirm("¿Desea cerrar la mesa?")
        if(result) {
            await closePayment(payment.id)
            for await (const order of orders) {
                await closeOrder(order.id)
            }
        }

        onReloadOrders()
        onClose()

    }

    return (
        <div className="payment-detail">
            <Table striped>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Mesa: </Table.Cell>
                        <Table.Cell>{ payment.datos_mesa.number }</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Total: </Table.Cell>
                        <Table.Cell>{ payment.totalPago } $</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Forma de pago: </Table.Cell>
                        <Table.Cell>
                            <Icon name={ getIconPayment(payment.tipoPago) } />
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
            <Button primary fluid onClick={ onCloseTable } >
                Marcar como pagado y cerrar mesa
            </Button>
        </div>
    )

}
