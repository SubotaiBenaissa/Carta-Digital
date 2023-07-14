import React, { useState, useCallback } from 'react'
import { Form, Image, Button } from "semantic-ui-react"
import { useDropzone } from "react-dropzone"
import "./AddEditCategory.scss"

export const AddEditCategory = () => {

    const [previewImage, setPreviewImage] = useState(null)

    const onDrop = useCallback(( imageFile ) => {
        const file = imageFile[0]
    }, [])

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/jpeg, image/png',
        noKeyboard: true,
        multiple: false,
        onDrop
    })
 
    return (

        <Form className="add-edit-category-form">
            <Form.Input name="title" placeholder="Nombre de categoría" />
            <Button type="button" fluid { ...getRootProps() }>Subir imagen</Button>
            <input { ...getInputProps() } />
            <Button type="submit" primary fluid>Crear</Button>
        </Form>
    
    )
    
}
