import React, { useState, useEffect } from 'react'
import { size } from 'lodash'
import classNames from "classnames"
import { Link } from "react-router-dom"
import { Label } from 'semantic-ui-react'
import { getOrderByTableAPI } from '../../../../api/orders'
import { OrderStatus } from '../../../../utils/constants'
import tablesvg from '../../../../assets/table.svg'
import { usePayment } from '../../../../hooks'
import "./TableItem.scss"



export const TableItem = ({ table, reload }) => {
    
    const [orders, setOrders] = useState([])
    const [tableBusy, setTableBusy] = useState(false)
    const [pendingPayment, setPendingPayment] = useState(false)
    const { getPaymentByTable } = usePayment()

    useEffect(() => {
        (async () => {
            const response = await getOrderByTableAPI(table.number, OrderStatus.PENDIENTE)
            setOrders(response)
        })()
    }, [reload])

    useEffect(() => {
        (async () => {
            const response = await getOrderByTableAPI(table.number, OrderStatus.ENTREGADO)
            if(size(response) > 0) setTableBusy(response)
            else setTableBusy(false)
        })()
    }, [reload])

    useEffect(() => {
        (async () => {
            const response = await getPaymentByTable(table.id)
            if( size(response) > 0 ) setPendingPayment(true)
            else setPendingPayment(false)
        })()
    }, [reload])
    
    return (
        <Link className="table-item" to={`/admin/table/${table.id}`}>
            {
                size(orders) > 0 ? (
                    <Label circular color="orange">
                        { size(orders) }
                    </Label>
                ) : null
            }

            {
                pendingPayment && (
                    <Label circular color="orange">
                        Cuenta
                    </Label>
                )
            }

            <img src={ tablesvg } className={classNames({
                pendiente: size(orders) > 0,
                busy: tableBusy,
                "pending-payment": pendingPayment
            })} />
            <p>Mesa { table.number }</p>
        </Link>
    )

}
