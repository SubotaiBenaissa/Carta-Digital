import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useProduct } from "../../../hooks"

export const Products = () => {

    const { tableNumber, idCategory } = useParams()
    const { loading, products, getProductByCategory } = useProduct()

    useEffect(() => {
        getProductByCategory(idCategory)
    }, [ idCategory ])
    
    console.log(products)

    return (
        <div>
            {
                loading ? <p>Loading</p> : <p>Lista de productos</p>
            }
            <Link to={`/client/${ tableNumber }`}>Volver a categorías</Link>
        </div>
    )

}