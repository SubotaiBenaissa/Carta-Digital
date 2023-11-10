import React from 'react'
import { Table, Button, Icon } from "semantic-ui-react"
import "./PaymentDetail.scss"

export const PaymentDetail = ({ payment, orders, onClose, onReloadOrders }) => {

    return (
        <div className="payment-detail">
            <Table striped>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Mesa: </Table.Cell>
                        <Table.Cell>#mesanumero</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Total: </Table.Cell>
                        <Table.Cell>#total</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Forma de pago: </Table.Cell>
                        <Table.Cell>#Formapago </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
            <Button primary fluid onClick={ () => console.log("Cerrar menú") } >
                Marcar como pagado y cerrar mesa
            </Button>
        </div>
    )

}
