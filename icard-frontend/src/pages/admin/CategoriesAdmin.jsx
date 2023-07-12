import React, { useEffect } from 'react'
import { Loader } from "semantic-ui-react"
import { HeaderPage } from "../../components/admin"
import { useCategory } from "../../hooks"

export const CategoriesAdmin = () => {

    const { loading, categories, getCategories } = useCategory()

    useEffect(() => {
        getCategories()
    }, [])
    
    console.log(categories)

    return (
        
        <>
            <HeaderPage title="Categorías" btnTitle="Nueva Categoría"/>
            { loading ? (
                <Loader active inline="centered">
                    Cargando...
                </Loader>
            ) : (
                <h2>Lista de categorías</h2>
            ) }
        </>

    )

}
