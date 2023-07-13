import React from 'react';
import { Table, Image, Button, Icon } from 'semantic-ui-react';
import { map } from 'lodash';
import "./TableCategory.scss"

export const TableCategoryAdmin = ({ categories }) => {

    return (

        <Table className="table-category-admin">
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Imagen</Table.HeaderCell>
                    <Table.HeaderCell>Nombre</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {
                    map(categories, ( category, index ) => (
                        <Table.Row key={ index }>
                            <Table.Cell>
                                <Image src={ category.image } />
                            </Table.Cell>
                            <Table.Cell>{ category.title }</Table.Cell>
                            <Table.Cell>
                                <Button icon onClick={() => console.log("Actualizar Categoría")}>
                                    <Icon name="pencil" />
                                </Button>
                                <Button icon onClick={() => console.log("Eliminar Categoría")}>
                                    <Icon name="close" />
                                </Button>
                            </Table.Cell>
                        </Table.Row>
                    ))
                }
            </Table.Body>
        </Table>

    )

}
