import React, { useEffect } from 'react'
import { Loader } from "semantic-ui-react"
import { HeaderPage } from '../../components/admin'
import { useProduct } from '../../hooks'

export const ProductAdmin = () => {

    const { loading, products, getProducts } = useProduct()

    useEffect(() => {
        getProducts()
    }, [])
    
    console.log(products);

    return (

        <>
            <HeaderPage title="Productos" btnTitle="Nuevo producto"/>
            { loading ? (
                <Loader active inline="centered">
                    Cargando...
                </Loader>
            ) : (
                <p>Productos</p>
            ) }
        </>
        
    )

}
