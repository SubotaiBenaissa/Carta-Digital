import React, { useEffect, useState } from 'react'
import { Loader } from "semantic-ui-react"
import { HeaderPage, TableCategoryAdmin, AddEditCategory } from "../../components/admin"
import { useCategory } from "../../hooks"
import { ModalBasic } from '../../components/common'

export const CategoriesAdmin = () => {

    const [showModal, setShowModal] = useState(false)
    const [titleModal, setTitleModal] = useState(null)
    const [contentModal, setContentModal] = useState(null)
    const { loading, categories, getCategories } = useCategory()

    useEffect(() => {
        getCategories()
    }, [])
    
    const openCloseModal = () => {
        setShowModal(prev => !prev)
    }

    const addCategory = () => {
        setTitleModal("Nueva categoría")
        setContentModal(<AddEditCategory />)
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
                <TableCategoryAdmin categories={ categories }/>
            ) }
            <ModalBasic show={ showModal } onClose={ openCloseModal } title={ titleModal } children={ contentModal }/>
        </>

    )

}
