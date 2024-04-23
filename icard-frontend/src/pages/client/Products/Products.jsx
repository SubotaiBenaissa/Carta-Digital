import React from 'react'
import { useParams, Link } from 'react-router-dom'

export const Products = () => {

    const { tableNumber, idCategory } = useParams()

    return (
        <div>
            <h1>Products</h1>
            <p>Mesa: { tableNumber }</p>
            <p>Categoría: { idCategory }</p>
            <Link to={`/client/${ tableNumber }`}>Volver a categorías</Link>
        </div>
    )

}
