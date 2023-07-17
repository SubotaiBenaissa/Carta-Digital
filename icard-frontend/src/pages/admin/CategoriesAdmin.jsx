import React, { useEffect, useState } from 'react'
import { Loader } from "semantic-ui-react"
import { HeaderPage, TableCategoryAdmin, AddEditCategory } from "../../components/admin"
import { useCategory } from "../../hooks"
import { ModalBasic } from '../../components/common'

export const CategoriesAdmin = () => {

    const [showModal, setShowModal] = useState(false)
    const [titleModal, setTitleModal] = useState(null)
    const [contentModal, setContentModal] = useState(null)
    const [refresh, setRefresh] = useState(false)
    const { loading, categories, getCategories } = useCategory()

    useEffect(() => {
        getCategories()
    }, [ refresh ])
    
    const openCloseModal = () => {
        setShowModal(prev => !prev)
    }

    const onRefresh = () => setRefresh( (prev) => !prev )

    const addCategory = () => {
        setTitleModal("Nueva categoría")
        setContentModal(<AddEditCategory onClose={ openCloseModal } onRefresh={ onRefresh } />)
        openCloseModal()
    }

    const editCategory = ( data ) => {
        setTitleModal("Editar Categoría")
        setContentModal( <AddEditCategory onClose={ openCloseModal } onRefresh={ onRefresh } category={ data } /> )
        openCloseModal()
    }

    return (
        
        <>
            <HeaderPage title="Categorías" btnTitle="Nueva Categoría" btnClick={ addCategory }/>
            { loading ? (
                <Loader active inline="centered">
                    Cargando...
                </Loader>
            ) : (
                <TableCategoryAdmin categories={ categories } editCategory={ editCategory }/>
            ) }
            <ModalBasic show={ showModal } onClose={ openCloseModal } title={ titleModal } children={ contentModal }/>
        </>

    )

}
