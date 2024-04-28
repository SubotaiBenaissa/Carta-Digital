import React from 'react'
import { Image, Button, Icon } from "semantic-ui-react"
import { map } from "lodash"
import "./ListProducts.scss"

export const ListProducts = ({ products }) => {

    return (
        <div className="list-product-client">
            {
                map(products, (product) => (
                    <div key={ product.id } className="list-products-client__product">
                        <div>
                            <Image src={ product.image } />
                            <span>{ product.title }</span>
                        </div>
                    </div>
                ))
            }
        </div>
    )

}
