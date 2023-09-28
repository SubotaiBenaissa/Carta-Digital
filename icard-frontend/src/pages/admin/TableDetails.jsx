import React, { useState, useEffect } from 'react'
import { Loader } from "semantic-ui-react"
import { useOrder, useTable, usePayment } from "../../hooks"
import { ModalBasic } from "../../components/common" 
import { forEach } from "lodash"
import { HeaderPage, AddOrderForm } from "../../components/admin"
import { ListOrder } from "../../components/admin"
import { useParams } from "react-router-dom"

export const TableDetails = () => {

    const [reloadOrders, setReloadOrders] = useState(false)
    const { id } = useParams()
    const { loading, orders, getOrderByTable, addPaymentToOrder } = useOrder()
    const { table, getTable } = useTable()
    const [showModal, setShowModal] = useState()
    const { createPayment } = usePayment();

    const openCloseModal = () => {
        setShowModal((prev) => !prev)
    }

    const onReloadOrders = () => {
        setReloadOrders((prev) => !prev)
    }

    useEffect(() => {
        getTable(id)
    }, [ id ])
    

    useEffect(() => {
        getOrderByTable(id, "", "ordering=-status,created_at")
    }, [id, reloadOrders])

    const onCreatePayment = async() => {

        const result = window.confirm('¿Está seguro de generar la cuenta?')

        if(result) {

            let totalPayment = 0;
            forEach(orders, (order) => {
                totalPayment += Number(order.product_data.price)
            })

            const resultPayment = window.confirm(
                "Pago con tarjeta pulsar aceptar, con efectivo pulsar cancelar"
            )

            const paymentData = {
                mesa: id,
                totalPago: totalPayment,
                tipoPago: resultPayment ? "TARJETA" : "EFECTIVO",
                estadoPago: "PENDIENTE"
            }

            const payment = await createPayment(paymentData)
            
            for await (const order of orders) {
                await addPaymentToOrder(order.id, payment.id)
            }

            onReloadOrders()

        }

    }
    
    return (
        <>
            <HeaderPage 
                title={`Mesa ${ table?.number || "" }`} 
                btnTitle="Añadir pedido" 
                btnClick={ openCloseModal } 
                btnTitleTwo="Generar cuenta" 
                btnClickTwo={ onCreatePayment }
            />
                {
                    loading ? (
                        <Loader active inline="centered">
                            Cargando...
                        </Loader>
                    ) : (
                        <ListOrder orders={ orders } onReloadOrders={ onReloadOrders } />
                    )
                }
            <ModalBasic show={ showModal } onClose={ openCloseModal } title="Crear pedido">
                <AddOrderForm idTable={ id } openCloseModal={ openCloseModal } onReloadOrders={ onReloadOrders } />
            </ModalBasic>
        </>
    )

}
