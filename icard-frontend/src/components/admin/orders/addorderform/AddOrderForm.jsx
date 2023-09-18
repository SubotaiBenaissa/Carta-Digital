import React, { useState, useEffect } from 'react'
import { Form, Image, Button, Dropdown } from "semantic-ui-react"
import { map } from 'lodash'
import { useFormik } from "formik"
import * as Yup from "yup"
import { useOrder, useProduct } from "../../../../hooks"
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

export const AddOrderForm = ({ idTable, openCloseModal }) => {

    const { products, getProducts, getProductByID } = useProduct();
    const { addOrderToTable } = useOrder();
    const [productsData, setProductsData] = useState();
    const [productFormat, setProductFormat] = useState([]);

    useEffect(() => {
        getProducts()
    }, [])

    useEffect(() => {
        setProductFormat(formatDropdownData(products))
    }, [products])

    const { values, handleSubmit, setFieldValue } = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        onSubmit: async(formValue) => {
            for await(const idProduct of formValue.products) {
                await addOrderToTable(idTable, idProduct)
            }
            openCloseModal()
        }
    })

    useEffect(() => {
        addProductList()
    }, [values])

    const addProductList = async() => {

        try {

            const productsID = values.products;
            const arrayTemp = []
            for await(const idProduct of productsID) {
                const response = await getProductByID(idProduct)
                arrayTemp.push(response)
            }
            setProductsData(arrayTemp)

        } catch (error) {

            console.log(error)

        }

    }

    const removeProductList = (index) => {

        const idProducts = [...values.products];
        idProducts.splice(index, 1);
        setFieldValue("products", idProducts)

    }

    return (
        <Form className="add-order-form" onSubmit={ handleSubmit }>
            <Dropdown 
                placeholder="Productos" 
                fluid 
                selection 
                search 
                options={ productFormat } 
                value={ null }
                onChange={ (_, data) => setFieldValue("products", [...values.products, data.value]) }
            />
            <div className="add-order-form__list">
                {
                    map(productsData, (product, index) => (
                        <div className="add-order-form__list-product" key={index}>
                            <div>
                                <Image src={ product.image } avatar size="tiny"/>
                                <span>{ product.title }</span>
                            </div>
                            <Button 
                                type="button" 
                                basic 
                                color="red" 
                                onClick={ () => removeProductList() }
                            > 
                            Eliminar producto 
                            </Button>
                        </div>
                    ))
                }
            </div>
            <Button type='submit' primary fluid>Añadir productos</Button>
        </Form>
    )
    
}
