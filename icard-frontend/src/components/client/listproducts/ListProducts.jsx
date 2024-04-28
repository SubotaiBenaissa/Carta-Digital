import React from 'react'
import { Image, Button, Icon } from "semantic-ui-react"
import { add, map } from "lodash"
import "./ListProducts.scss"

export const ListProducts = ({ products }) => {

    const addCart = ( product ) => {
        console.log("producto: ", product.title)
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
