import { useState, useEffect } from 'react'
import { Image, Button, Icon } from "semantic-ui-react"
import { forEach, map } from 'lodash'
import { removeProductCart } from "../../../api/cart"
import "./ListProductCart.scss"
import { useParams, useNavigate } from 'react-router-dom'
import { useOrder, useTable } from '../../../hooks'

export const ListProductCart = ({ products, onReloadCart }) => {

    const [total, setTotal] = useState()
    const { addOrderToTable } = useOrder()
    const { getTableByNumber } = useTable()
    const { tableNumber } = useParams()
    console.log(useParams())

    const removeProduct = ( index ) => {

        removeProductCart(index)
        onReloadCart()

    }

    const totalTemp = () => {
        let totalTemp = 0
        forEach(products, ( product ) => {
            totalTemp += Number(product.price)
        })
        setTotal(totalTemp.toFixed(2))
    }

    const createOrder = async() => {
        const tableData = getTableByNumber(table)
        for await (const product of products) {
            await addOrderToTable()
        }
    }

    useEffect(() => {
        totalTemp()
    }, [products])
    
    return (

        <div className='list-product-cart'>
            {
                map(products, (product, index) => (
                    <div key={ index } className='list-product-cart__product'>
                        <div>
                            <Image src={ product.image } avatar />
                            <span>{ product.title }</span>
                        </div>
                        <span>${ product.price }</span>
                        <Icon name="close" onClick={ () => removeProduct(index) } />
                    </div>
                ))
            }
            <Button primary fluid>
                Realizar pedido (${ total })
            </Button>
        </div>

    )

}
