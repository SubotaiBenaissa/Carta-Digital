import React from 'react'
import { Table, Image, Button, Icon } from "semantic-ui-react"
import { map } from 'lodash'
import './TableProduct.scss'

export const TableProduct = ({ products, updateProduct, deleteProduct }) => {

    return (

        <Table className="table-product-admin">
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Imagen</Table.HeaderCell>
                    <Table.HeaderCell>Producto</Table.HeaderCell>
                    <Table.HeaderCell>Precio</Table.HeaderCell>
                    <Table.HeaderCell>Categoría</Table.HeaderCell>
                    <Table.HeaderCell>Activo</Table.HeaderCell>
                    <Table.HeaderCell>Acciones</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {
                    map( products, (product, index) => (
                        <Table.Row key={ index }>
                            <Table.Cell width={ 2 }>
                                <Image src={ product.image }/>
                            </Table.Cell>
                            <Table.Cell>{ product.title }</Table.Cell>
                            <Table.Cell>$ { product.price }</Table.Cell>
                            <Table.Cell>{ product.category_data.title }</Table.Cell>
                            <Table.Cell className="status">
                                { product.active ? <Icon name='check' /> : <Icon name="close"/> }
                            </Table.Cell>
                            <Table.Cell>
                                <Button icon onClick={() => updateProduct(product)}>
                                    <Icon name="pencil" />
                                </Button>
                                <Button icon negative onClick={() => console.log("Eliminar")}>
                                    <Icon name="close" />
                                </Button>
                            </Table.Cell>
                        </Table.Row>
                    ) )
                }
            </Table.Body>
        </Table>

    )

}
