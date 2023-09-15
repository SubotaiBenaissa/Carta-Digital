import React, { useState, useEffect } from 'react'
import { Loader, Modal } from "semantic-ui-react"
import { useOrder, useTable } from "../../hooks"
import { ModalBasic } from "../../components/common" 
import { HeaderPage, AddOrderForm } from "../../components/admin"
import { ListOrder } from "../../components/admin"
import { useParams } from "react-router-dom"

export const TableDetails = () => {

    const [reloadOrders, setReloadOrders] = useState(false)
    const { id } = useParams()
    const { loading, orders, getOrderByTable } = useOrder()
    const { table, getTable } = useTable()
    const [showModal, setShowModal] = useState()

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
    
    return (
        <>
            <HeaderPage title={`Mesa ${ table?.number || "" }`} btnTitle="Añadir pedido" btnClick={ openCloseModal } />
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
                <AddOrderForm idTable={ id } openCloseModal={ openCloseModal } />
            </ModalBasic>
        </>
    )

}
