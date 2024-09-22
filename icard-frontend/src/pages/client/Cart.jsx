import { useEffect, useState } from 'react'
import { useProduct } from '../../hooks' 
import { getProductsCart } from "../../api/cart"

export const Cart = () => {

    const getListProducts = async() => {
        const idProductsCart = getProductsCart()
        const productsArray = []
        for await (const idProduct of idProductsCart) {
            console.log(idProduct)
        }
    }

    useEffect(() => {
        getListProducts()
    }, [])
    

    return (
        <div>
            <h1>Carrito</h1>
        </div>
    )
}
