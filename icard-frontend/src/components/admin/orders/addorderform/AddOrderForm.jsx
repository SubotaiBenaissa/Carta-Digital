import React, { useState, useEffect } from 'react'
import { Form, Image, Button, Dropdown } from "semantic-ui-react"
import { map } from 'lodash'
import { useFormik } from "formik"
import * as Yup from "yup"
import { useProduct } from "../../../../hooks"
import "./AddOrderForm.scss"

function initialValues() {

    return {
        products: []
    }

}

function validationSchema() {

    return {
        products: Yup.array().required(true)
    }

}

function formatDropdownData(data) {

    return map(data, (item) => ({

        key: item.id,
        text: item.title,
        value: item.id

    }))

}

export const AddOrderForm = ({ id, openCloseModal }) => {

    const { products, getProducts } = useProduct()
    const [productsData, setProductsData] = useState()
    const [productFormat, setProductFormat] = useState([])

    console.log(productFormat)

    useEffect(() => {
        getProducts()
    }, [])

    useEffect(() => {
        setProductFormat(formatDropdownData(products))
    }, [products])

    useEffect(() => {
        addProductList()
    }, [values])

    const { values, handleSubmit, setFieldValue } = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        onSubmit: async(formValue) => {
            console.log("Creando pedido")
            console.log(formValue)
        }
    })

    const addProductList = async() => {

        try {

            const productsID = values.products;
            const arrayTemp = []
            for await(const idProduct of productsID) {
                console.log(idProduct)
            }

        } catch (error) {

            console.log(error)

        }

    }

    return (
        <Form className="add-order-form" onSubmit={ handleSubmit }>
            <Dropdown 
                placeholder="Productos" 
                fluid 
                selection 
                search 
                options={ productFormat } 
                onChange={ (_, data) => setFieldValue("products", [...values.products, data.value]) }
            />
            <div className='add-order-form__list'>
                {
                    // Productos seleccionados
                }
            </div>
            <Button type='submit' primary fluid>Añadir productos</Button>
        </Form>
    )
    
}
