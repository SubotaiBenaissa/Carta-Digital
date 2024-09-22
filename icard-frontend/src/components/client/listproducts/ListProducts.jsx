import React from 'react'
import { Image, Button, Icon } from "semantic-ui-react"
import { map } from "lodash"
import { addProductCart } from '../../../api/cart'
import "./ListProducts.scss"

export const ListProducts = ({ products }) => {

    const addCart = ( product ) => {
        addProductCart(product.id);
    }

    return (
        <div className="list-product-client">
            {
                map(products, (product) => (
                    <div key={ product.id } className="list-products-client__product">
                        <div>
                            <Image src={ product.image } />
                            <span>{ product.title }</span>
                        </div>
                        <Button primary icon onClick={ () => addCart( product ) }>
                            <Icon name="add" />
                        </Button>
                    </div>
                ))
            }
        </div>
    )

}
