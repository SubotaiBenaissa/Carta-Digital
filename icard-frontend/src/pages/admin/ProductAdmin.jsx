import React, { useState, useEffect } from 'react'
import { Loader } from "semantic-ui-react"
import { HeaderPage, TableProduct, EditAddProduct } from '../../components/admin'
import { ModalBasic } from '../../components/common'
import { useProduct } from '../../hooks'

export const ProductAdmin = () => {

    const [showModal, setShowModal] = useState(false)
    const [titleModal, setTitleModal] = useState(null)
    const [contentModal, setContentModal] = useState(null)
    const { loading, products, getProducts } = useProduct()

    useEffect(() => {
        getProducts()
    }, [])
    
    const openCloseModal = () => setShowModal((prev) => !prev)

    const addProduct = () => {

        setTitleModal("Agregar producto")
        setContentModal(<EditAddProduct onClose={ openCloseModal } />)
        openCloseModal()

    }

    return (

        <>
            <HeaderPage title="Productos" btnTitle="Nuevo producto" btnClick={ addProduct }/>
            { loading ? (
                <Loader active inline="centered">
                    Cargando...
                </Loader>
            ) : (
                <TableProduct products={ products }/>
            ) }
            <ModalBasic show={showModal} title={titleModal} children={contentModal} onClose={ openCloseModal } />
        </>

    )

}
