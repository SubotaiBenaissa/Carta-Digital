import React from 'react'
import { Form, Image, Button } from "semantic-ui-react"
import "./AddEditCategory.scss"

export const AddEditCategory = () => {

    return (

        <Form className="add-edit-category-form">
            <Form.Input name="title" placeholder="Nombre de categoría" />
            <Button type="button" fluid>Subir imagen</Button>
            <Button type="submit" primary fluid>Crear</Button>
        </Form>
    
    )
    
}
