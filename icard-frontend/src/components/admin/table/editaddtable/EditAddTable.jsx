import React from 'react'
import { Form, Button } from "semantic-ui-react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useTable } from "../../../../hooks"
import "./EditAddTable.scss"

function initialValues( data ) {
    return {
        number: data?.number || "",
    }
}

function tableSchema() {
    return {
        number: Yup.number().required(true)
    }
}

export const EditAddTable = ({ onClose, onRefresh, table }) => {

    const { addTable, updateTable } = useTable()

    const { values, errors, handleSubmit, handleChange } = useFormik({
        initialValues: initialValues( table ),
        validationSchema: Yup.object(tableSchema()),
        validateOnChange: false,
        onSubmit: async ( formValue ) => {
            if ( table ) await updateTable(table.id, formValue)
            else await addTable(formValue)
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
                value={ values.number } 
                onChange={ handleChange } 
                error={ errors.number }
            />
            <Button type="submit" primary fluid content={ table ? "Actualizar" : "Crear" } />
        </Form>

    )

}

