import { useEffect, useState } from 'react'
import { useProduct } from '../../hooks' 
import { Link, useParams } from "react-router-dom"
import { getProductsCart } from "../../api/cart"
import { ListProductCart } from '../../components/Client'
import { size } from 'lodash'
import { Button } from 'semantic-ui-react'

export const Cart = () => {

    const { getProductByID } = useProduct()
    const [ reloadCart, setReloadCart ] = useState(false)
    const [ products, setProducts ] = useState(null)
    const { tableNumber } = useParams();

    const getListProducts = async() => {

        const idProductsCart = getProductsCart()
        const productsArray = []

        for await (const idProduct of idProductsCart) {
            const response = await getProductByID(idProduct)
            productsArray.push(response)
        }

        setProducts(productsArray);

    }

    const onReloadCart = () => setReloadCart((prev) => !prev)

    useEffect(() => {
        getListProducts()
    }, [ reloadCart ])
    
    return (
        <div>
            <h1>Carrito</h1>
            {
                !products ? (
                    <p>Cargando...</p>
                ): size(products) < 1 ? (
                    <div style={{ textAlign: 'center' }}>
                        <p>Carrito vacío</p>
                        <Link to={`/client/${tableNumber}/orders`}>
                            <Button primary>Ver pedidos</Button>
                        </Link>
                    </div>
                ): 
                <ListProductCart products={ products } onReloadCart={ onReloadCart }/>
            }
        </div>
    )
}
