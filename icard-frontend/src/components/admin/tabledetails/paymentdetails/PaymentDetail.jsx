import React from 'react'
import { Table, Button, Icon } from "semantic-ui-react"
import "./PaymentDetail.scss"

export const PaymentDetail = ({ payment, orders, onClose, onReloadOrders }) => {

    const getIconPayment = ( key ) => {

        if (key === "TARJETA") return "credit card outline"
        if (key === "EFECTIVO") return "money bill alternate outline"
        return null

    }

    console.log(payment)

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
            <Button primary fluid onClick={ () => console.log("Cerrar mesa") } >
                Marcar como pagado y cerrar mesa
            </Button>
        </div>
    )

}
