import React, { useEffect } from 'react'
import { Loader } from "semantic-ui-react"
import { HeaderPage, TableCategoryAdmin } from "../../components/admin"
import { useCategory } from "../../hooks"

TableCategoryAdmin

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
                <TableCategoryAdmin categories={ categories }/>
            ) }
        </>

    )

}
