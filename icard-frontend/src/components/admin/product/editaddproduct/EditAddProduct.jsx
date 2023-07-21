import React, { useEffect, useState } from 'react'
import { map } from 'lodash'
import { Form, Image, Button, Dropdown, Checkbox } from "semantic-ui-react"
import { useCategory } from '../../../../hooks'
import './EditAddProduct.scss'

function formatDropdownData( data ) {

    return map(data, (item) => (
        {
            key: item.id,
            text: item.title,
            value: item.id
        }
    ))

}

export const EditAddProduct = ({ onClose }) => {

    const { categories, getCategories } = useCategory()
    const [categoriesFormat, setCategoriesFormat] = useState([])

    useEffect(() => {
        
        getCategories()

    }, [])

    useEffect(() => {
        
        setCategoriesFormat(formatDropdownData(categories))

    }, [categories])

    return (
    
        <Form className="add-edit-product-form">
            <Form.Input name="title" placeholder="Nombre del producto" />
            <Form.Input name="price" placeholder="Precio del producto" type="number" />
            <Dropdown placeholder="Categoria" fluid search options={ categoriesFormat }/>
            <div className="add-edit-product-form__active">
                <Checkbox toggle />
                Producto Activo
            </div>
            <Button type="button" fluid> Subir imagen </Button>
            <Button type="submit" primary fluid>Crear producto</Button>
        </Form>

    )

}
