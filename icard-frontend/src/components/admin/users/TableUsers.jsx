import React from 'react'
import { Table, Icon, Button } from "semantic-ui-react"
import { map } from "lodash"
import "./TableUsers.scss"

export const TableUsers = ({ users, updateUser }) => {

    return (
        
        <Table className="table-users-admin">
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Usuario</Table.HeaderCell>
                    <Table.HeaderCell>Email</Table.HeaderCell>
                    <Table.HeaderCell>Nombre</Table.HeaderCell>
                    <Table.HeaderCell>Apellidos</Table.HeaderCell>
                    <Table.HeaderCell>Activo</Table.HeaderCell>
                    <Table.HeaderCell>Staff</Table.HeaderCell>
                    <Table.HeaderCell>Acciones</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {
                    map(users, (user, index) => (
                        <Table.Row key={ index }>
                            <Table.Cell>{ user.username }</Table.Cell>
                            <Table.Cell>{ user.email }</Table.Cell>
                            <Table.Cell>{ user.first_name }</Table.Cell>
                            <Table.Cell>{ user.last_name }</Table.Cell>
                            <Table.Cell className='status'>{ user.is_active ? <Icon name="check" /> : <Icon name="close"/> }</Table.Cell>
                            <Table.Cell className='status'>{ user.is_staff ? <Icon name="check"/> : <Icon name="close"/> }</Table.Cell>
                            <Table.Cell>
                                <Button icon onClick={() => updateUser(user)}>
                                    <Icon name="pencil"/>
                                </Button>
                                <Button icon negative onClick={() => console.log(`Borrar usuario ${user.username}`)}>
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
