import React from 'react'
import { Table, Button, Icon } from "semantic-ui-react"
import { map } from 'lodash';
import moment from 'moment';
import './TablePayments.scss'

export const TablePayments = ({ payments }) => {

    console.log(payments)

    const getIconPaymentName = (key) => {
        if( key === "TARJETA" ) return "credit card outline";
        if( key === "EFECTIVO" ) return "money bill alternate outline";
        return null
    }

    return (
        <Table className="table-payments-admin">
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>ID</Table.HeaderCell>
                    <Table.HeaderCell>Mesa</Table.HeaderCell>
                    <Table.HeaderCell>Total</Table.HeaderCell>
                    <Table.HeaderCell>Tipo de pago</Table.HeaderCell>
                    <Table.HeaderCell>Fecha de pago</Table.HeaderCell>
                    <Table.HeaderCell textAlign='center'>Ver pago</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                { map(payments, (payment, index) => (
                    <Table.Row key={ index }>
                        <Table.Cell>{ payment.id }</Table.Cell>
                        <Table.Cell>{ payment.datos_mesa.number }</Table.Cell>
                        <Table.Cell>$ { payment.totalPago }</Table.Cell>
                        <Table.Cell><Icon name={ getIconPaymentName(payment.tipoPago) }/> { payment.tipoPago }</Table.Cell>
                        <Table.Cell>{ moment(payment.created_at).format("DD/MM/YYYY - HH:MM") }</Table.Cell>
                        <Table.Cell textAlign='right'>
                            <Button icon onClick={() => console.log("Ver detalles")}>
                                <Icon name='eye' />
                            </Button>
                        </Table.Cell>
                    </Table.Row>
                )) }
            </Table.Body>
        </Table>
    )

}
