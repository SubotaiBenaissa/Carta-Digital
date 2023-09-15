import React, { useState, useEffect } from 'react'
import { Form, Image, Button, Dropdown } from "semantic-ui-react"
import { map } from 'lodash'
import { useProduct } from "../../../../hooks"
import "./AddOrderForm.scss"

function formatDropdownData(data) {

    return map(data, (item) => ({

        key: item.id,
        text: item.title,
        value: item.id

    }))

}

export const AddOrderForm = ({ id, openCloseModal }) => {

    const { products, getProducts } = useProduct()
    const [productFormat, setProductFormat] = useState([])

    console.log(productFormat)

    useEffect(() => {
        getProducts()
    }, [])

    useEffect(() => {
        setProductFormat(formatDropdownData(products))
    }, [products])

    return (
        <Form className="add-order-form">
            <Dropdown placeholder="Productos" fluid selection search options={ productFormat } />
            <div className='add-order-form__list'>
                {
                    // Productos seleccionados
                }
            </div>
            <Button type='submit' primary fluid>Añadir productos</Button>
        </Form>
    )
    
}
