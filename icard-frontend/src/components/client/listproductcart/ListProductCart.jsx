import { useState, useEffect } from 'react'
import { Image, Button, Icon } from "semantic-ui-react"
import { forEach, map } from 'lodash'
import { removeProductCart } from "../../../api/cart"
import "./ListProductCart.scss"
import { useParams, useNavigate } from 'react-router-dom'

export const ListProductCart = ({ products }) => {

    const removeProduct = ( index ) => {

        removeProductCart(index)
        
    }

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
                Realizar pedido
            </Button>
        </div>

    )

}
