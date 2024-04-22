import React from 'react'
import { Image } from "semantic-ui-react"
import { map } from "lodash"
import "./ListCategories.scss"

export const ListCategories = ({ categories }) => {

    

    return (

        <div className="list-categories-client">
            {
                map(categories, (category) => (
                    <div key={ category.id } className='list-categories-client__category'>
                        <Image src={ category.image } size="small" />
                        <span>{ category.title }</span>
                    </div>
                ))
            }
        </div>

    )
}
