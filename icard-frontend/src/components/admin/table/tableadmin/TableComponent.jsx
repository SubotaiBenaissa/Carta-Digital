import React from 'react'
import { Table, Button, Icon } from 'semantic-ui-react'
import { map } from 'lodash'
import "./TableComponent.scss"

export const TableComponent = ({ tables }) => {

    return (
        
        <Table className="table-table-admin">
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Numero de mesa</Table.HeaderCell>
                    <Table.HeaderCell textAlign="right">Acciones</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {
                    map(tables, (table, index) => (
                        <Table.Row key={index}>
                            <Table.Cell>{ table.number }</Table.Cell>
                            <Table.Cell textAlign='right'>
                                <Button icon onClick={() => console.log("Editar mesa")}>
                                    <Icon name="pencil" />
                                </Button>
                                <Button negative icon onClick={() => console.log("Eliminar mesa")}>
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
