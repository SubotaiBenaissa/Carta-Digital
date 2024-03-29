import React, { useState, useEffect } from 'react'
import { Loader } from "semantic-ui-react"
import { HeaderPage, TableProduct, EditAddProduct } from '../../components/admin'
import { ModalBasic } from '../../components/common'
import { useProduct } from '../../hooks'

export const ProductAdmin = () => {

    const [showModal, setShowModal] = useState(false)
    const [titleModal, setTitleModal] = useState(null)
    const [contentModal, setContentModal] = useState(null)
    const [refresh, setRefresh] = useState(false)
    const { loading, products, getProducts, deleteProduct } = useProduct()

    useEffect(() => {
        getProducts()
    }, [ refresh ])
    
    const openCloseModal = () => setShowModal(( prev ) => !prev)
    const onRefresh = () => setRefresh(( prev ) => !prev)

    const addProduct = () => {

        setTitleModal("Agregar producto")
        setContentModal(<EditAddProduct onClose={ openCloseModal } onRefresh={ onRefresh } />)
        openCloseModal()

    }

    const updateProduct = ( data ) => {

        setTitleModal("Editar producto")
        setContentModal(<EditAddProduct onClose={ openCloseModal } onRefresh={ onRefresh } product={ data } />)
        openCloseModal()

    }

    const onDeleteProduct = async( data ) => {

        const result = confirm(`Desea eliminar el producto? ${ data.title }`)
        if( result ) {
            await deleteProduct(data.id)
            onRefresh()
        }

    }

    return (

        <>
            <HeaderPage title="Productos" btnTitle="Nuevo producto" btnClick={ addProduct }/>
            { loading ? (
                <Loader active inline="centered">
                    Cargando...
                </Loader>
            ) : (
                <TableProduct products={ products } updateProduct={ updateProduct } deleteProduct={ onDeleteProduct }/>
            ) }
            <ModalBasic show={showModal} title={titleModal} children={contentModal} onClose={ openCloseModal } />
        </>

    )

}
