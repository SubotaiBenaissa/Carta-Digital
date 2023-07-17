import React, { useState, useCallback } from 'react'
import { Form, Image, Button } from "semantic-ui-react"
import { useDropzone } from "react-dropzone"
import { useFormik } from "formik"
import { useCategory } from '../../../../hooks'
import * as Yup from "yup"
import "./AddEditCategory.scss"

function initialValues(category) {

    return {
        title: category?.title || "",
        image: ""
    }

}

function newSchema() {

    return {
        title: Yup.string().required(true),
        image: Yup.string().required(true)
    }

}

export const AddEditCategory = ({ onClose, onRefresh, category }) => {

    const [previewImage, setPreviewImage] = useState(category?.image || null)
    const { addCategory } = useCategory()

    console.log(category)

    const { values, errors, handleSubmit, handleChange, setFieldValue } = useFormik({
        initialValues: initialValues(category),
        validationSchema: Yup.object(newSchema()),
        validateOnChange: false,
        onSubmit: async( formValue ) => {
            try {
                
                await addCategory(formValue)
                onRefresh()
                onClose();

            } catch (error) {

                throw error

            }
        }
    })

    const onDrop = useCallback(async ( imageFile ) => {
        const file = imageFile[0]
        await setFieldValue('image', file)
        setPreviewImage(URL.createObjectURL(file))
    }, [])

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/jpeg, image/png',
        noKeyboard: true,
        multiple: false,
        onDrop
    })
 
    return (

        <Form className="add-edit-category-form" onSubmit={ handleSubmit }>
            <Form.Input name="title" placeholder="Nombre de categoría" value={ values.title } onChange={ handleChange } error={ errors.title }/>
            <Button type="button" fluid { ...getRootProps() } color={ errors.image && "red" }>Subir imagen</Button>
            <input { ...getInputProps() } />
            <Image fluid src={ previewImage }/>
            <Button type="submit" primary fluid>Crear</Button>
        </Form>
    
    )
    
}
