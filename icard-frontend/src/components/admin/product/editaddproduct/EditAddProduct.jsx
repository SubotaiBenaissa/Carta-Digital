import React from 'react'
import { Form, Image, Button, Dropdown, Checkbox } from "semantic-ui-react"
import './EditAddProduct.scss'

export const EditAddProduct = ({ onClose }) => {

    return (
    
        <Form className="add-edit-product-form">
            <Form.Input name="title" placeholder="Nombre del producto" />
            <Form.Input name="price" placeholder="Precio del producto" type="number" />
            <Dropdown placeholder="Categoria" fluid search/>
            <div className="add-edit-product-form__active">
                <Checkbox toggle />
                Producto Activo
            </div>
            <Button type="button" fluid> Subir imagen </Button>
            <Button type="submit" primary fluid>Crear producto</Button>
        </Form>

    )

}
