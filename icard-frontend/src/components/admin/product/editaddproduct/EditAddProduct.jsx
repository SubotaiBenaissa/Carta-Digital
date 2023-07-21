import React, { useCallback, useEffect, useState } from 'react'
import { map } from 'lodash'
import { useDropzone } from 'react-dropzone'
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
    const [previewImage, setPreviewImage] = useState(null)

    useEffect(() => {
        
        getCategories()

    }, [])

    useEffect(() => {
        
        setCategoriesFormat(formatDropdownData(categories))

    }, [categories])

    const onDrop = useCallback( async( acceptedFile ) => {
        
        const file = acceptedFile[0];
        setPreviewImage(URL.createObjectURL(file))

    }, [])

    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/jpeg, image/png",
        noKeyboard: true,
        multiple: false,
        onDrop
    })

    return (
    
        <Form className="add-edit-product-form">
            <Form.Input name="title" placeholder="Nombre del producto" />
            <Form.Input name="price" placeholder="Precio del producto" type="number" />
            <Dropdown placeholder="Categoria" fluid search selection options={ categoriesFormat }/>
            <div className="add-edit-product-form__active">
                <Checkbox toggle />
                Producto Activo
            </div>
            <Button type="button" fluid { ...getRootProps() }> Subir imagen </Button>
            <input {...getInputProps()}/>
            <Image src={ previewImage }/>
            <Button type="submit" primary fluid>Crear producto</Button>
        </Form>

    )

}
