import React from 'react'
import { Form, Button } from "semantic-ui-react"
import { useFormik } from "formik"
import * as Yup from "yup"
import "./EditAddTable.scss"

function initialValues() {

    return {

        number: ""

    }

}

function tableSchema() {

    return {

        number: Yup.number().required(true)

    }

}

export const EditAddTable = ({ onClose }) => {

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(tableSchema)
    })
 
    return (

        <Form className="add-edit-table-form">
            <Form.Input name="number" type="number" placeholder="Numero de mesa" />
            <Button type="submit" primary fluid content="Crear" />
        </Form>

    )

}
