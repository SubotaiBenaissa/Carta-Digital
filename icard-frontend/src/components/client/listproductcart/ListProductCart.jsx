import { useState, useEffect } from 'react'
import { Image, Button, Icon } from "semantic-ui-react"
import { forEach, map } from 'lodash'
import { removeProductCart, clearProductCart } from "../../../api/cart"
import "./ListProductCart.scss"
import { useParams, useNavigate } from 'react-router-dom'
import { useOrder, useTable } from '../../../hooks'

export const ListProductCart = ({ products, onReloadCart }) => {

    const [total, setTotal] = useState()
    const { addOrderToTable } = useOrder()
    const { getTableByNumber } = useTable()
    const { tableNumber } = useParams()
    const navigate = useNavigate()

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
        const tableData = await getTableByNumber( tableNumber )
        const idTable = tableData[0].id
        for await (const product of products) {
            await addOrderToTable( idTable, product.id )
        }
        clearProductCart()
        navigate(`/client/${ tableNumber }/pedidos`)
    }

    useEffect(() => {
        totalTemp()
    }, [ products ])
    
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
            <Button primary fluid onClick={ createOrder }>
                Realizar pedido (${ total })
            </Button>
        </div>

    )

}
