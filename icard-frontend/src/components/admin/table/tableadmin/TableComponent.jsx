import { useState } from 'react'
import { Table, Button, Icon } from 'semantic-ui-react'
import { map } from 'lodash'
import { QRCodeSVG } from "qrcode.react"
import { ModalBasic } from "../../../common"
import "./TableComponent.scss"

export const TableComponent = ({ tables, updateTable, deleteTable }) => {

    const [showModal, setShowModal] = useState(false)
    const [contentModal, setContentModal] = useState(null)
    
    const openCloseModal = () => setShowModal((prev) => !prev) 

    const showQr = ( table ) => {
        console.log(`${ window.location.origin }/client/${ table.number }`)
        setContentModal(
            <div style={{ textAlign: "center" }}>
                <QRCodeSVG value={`${ window.location.origin }/client/${ table.number }`} />
            </div>
        )
        openCloseModal()
    }

    return (
        
        <>
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
                                    <Button icon onClick={() => showQr(table)}>
                                        <Icon name="qrcode" />
                                    </Button>
                                    <Button icon onClick={() => updateTable(table)}>
                                        <Icon name="pencil" />
                                    </Button>
                                    <Button negative icon onClick={() => deleteTable(table)}>
                                        <Icon name="close" />
                                    </Button>
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
            <ModalBasic 
                show={ showModal }
                onClose={ openCloseModal }
                title="Codigo QR"
                size="mini"
                children={ contentModal }
            />
        </>

    )
    
}
