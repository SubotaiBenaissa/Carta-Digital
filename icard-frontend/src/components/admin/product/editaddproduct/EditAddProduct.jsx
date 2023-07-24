import React, { useCallback, useEffect, useState } from 'react'
import { map } from 'lodash'
import { useDropzone } from 'react-dropzone'
import { Form, Image, Button, Dropdown, Checkbox } from "semantic-ui-react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useCategory, useProduct } from '../../../../hooks'
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

function initialValues() {

    return {

        title: "",
        price: "",
        category: "",
        active: false,
        image: ""

    }

}

function productValidationSchema() {

    return {

        title: Yup.string().required(true),
        price: Yup.number().required(true),
        category: Yup.number().required(true),
        active: Yup.boolean().required(true),
        image: Yup.string().required(true)

    }

}

export const EditAddProduct = ({ onClose, onRefresh }) => {

    const { categories, getCategories } = useCategory()
    const [categoriesFormat, setCategoriesFormat] = useState([])
    const [previewImage, setPreviewImage] = useState(null)
    const { addProduct } = useProduct()

    useEffect(() => {
        
        getCategories()

    }, [])

    useEffect(() => {
        
        setCategoriesFormat(formatDropdownData(categories))

    }, [categories])

    const { values, errors, handleSubmit, handleChange, setFieldValue } = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(productValidationSchema()),
        validateOnChange: false,
        onSubmit: async( formValue ) => {
            await addProduct(formValue)
            onRefresh()
            onClose()
        }
    })

    const onDrop = useCallback( async( acceptedFile ) => {
        
        const file = acceptedFile[0];
        await setFieldValue('image', file)
        setPreviewImage(URL.createObjectURL(file))

    }, [])

    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/jpeg, image/png",
        noKeyboard: true,
        multiple: false,
        onDrop
    })

    return (
    
        <Form className="add-edit-product-form" onSubmit={ handleSubmit }>
            <Form.Input name="title" placeholder="Nombre del producto" value={ values.title } onChange={ handleChange } error={ errors.title } />
            <Form.Input name="price" placeholder="Precio del producto" type="number" value={ values.price } onChange={ handleChange } error={ errors.price } />
            <Dropdown
                placeholder="Categoria" 
                fluid 
                search 
                selection 
                options={ categoriesFormat } 
                value={ values.category } 
                error={ errors.category }
                onChange={(_, data) => setFieldValue("category", data.value)}
            />
            <div className="add-edit-product-form__active">
                <Checkbox 
                    toggle 
                    checked={ values.active } 
                    onChange={(_, data) => {
                        setFieldValue("active", data.checked)
                    }} 
                />
                Producto Activo
            </div>
            <Button type="button" fluid { ...getRootProps() } color={ errors.image && "red" }> { previewImage ? "Cambiar imagen" : "Subir imagen" } </Button>
            <input {...getInputProps()}/>
            <Image src={ previewImage }/>
            <Button type="submit" primary fluid>Crear producto</Button>
        </Form>

    )

}
