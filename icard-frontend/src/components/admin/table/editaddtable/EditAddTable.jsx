import React from 'react'
import { Form, Button } from "semantic-ui-react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useTable } from "../../../../hooks"
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

export const EditAddTable = ({ onClose, onRefresh }) => {

    const { addTable } = useTable()

    const { values, errors, handleSubmit, handleChange } = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(tableSchema()),
        validateOnChange: false,
        onSubmit: async ( formValue ) => {
            await addTable(formValue)
            onRefresh()
            onClose()
        }
    })
 
    return (

        <Form className="add-edit-table-form" onSubmit={ handleSubmit }>
            <Form.Input 
                name="number" 
                type="number" 
                placeholder="Numero de mesa" 
                values={ values.number } 
                onChange={ handleChange } 
                error={ errors.number }
            />
            <Button type="submit" primary fluid content="Crear" />
        </Form>

    )

}
