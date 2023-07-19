import React from 'react'
import { Table, Image, Button, Icon } from "semantic-ui-react"
import { map } from 'lodash'
import './TableProduct.scss'

export const TableProduct = ({ products }) => {

    return (

        <Table className="table-product-admin">
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Imagen</Table.HeaderCell>
                    <Table.HeaderCell>Producto</Table.HeaderCell>
                    <Table.HeaderCell>Precio</Table.HeaderCell>
                    <Table.HeaderCell>Categoría</Table.HeaderCell>
                    <Table.HeaderCell>Acciones</Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {
                    map( products, (product, index) => (
                        <Table.Row key={ index }>
                            <Table.Cell width={ 2 }>
                                <Image src={ product.image }/>
                            </Table.Cell>
                        </Table.Row>
                    ) )
                }
            </Table.Body>
        </Table>

    )

}
