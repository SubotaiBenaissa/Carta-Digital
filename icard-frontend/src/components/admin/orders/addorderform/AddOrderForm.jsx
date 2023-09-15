import React from 'react'
import { Form, Image, Button, Dropdown } from "semantic-ui-react"
import "./AddOrderForm.scss"

export const AddOrderForm = ({ id, openCloseModal }) => {

    return (
        <Form className="add-order-form">
            <Dropdown placeholder="Productos" fluid selection search />
            <div className='add-order-form__list'>
                {
                    // Productos seleccionados
                }
            </div>
            <Button type='submit' primary fluid>Añadir productos</Button>
        </Form>
    )
    
}
