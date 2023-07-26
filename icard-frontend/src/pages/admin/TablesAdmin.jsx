import React, { useEffect, useState } from 'react'
import { HeaderPage, TableComponent, EditAddTable } from '../../components/admin'
import { ModalBasic } from "../../components/common"
import { useTable } from '../../hooks'
import { Loader } from 'semantic-ui-react'

export const TablesAdmin = () => {

    const [showModal, setShowModal] = useState(false)
    const [titleModal, setTitleModal] = useState("")
    const [contentModal, setContentModal] = useState(null)
    const [refresh, setRefresh] = useState(false)
    const { tables, loading, getTables } = useTable()

    useEffect(() => {
        
        getTables()

    }, [ refresh ])

    const openCloseModal = () => setShowModal((prev) => !prev)
    const onRefresh = () => setRefresh( (prev) => !prev )

    const addTable = () => {
        setTitleModal("Crear mesa")
        setContentModal(<EditAddTable onClose={ openCloseModal } onRefresh={ onRefresh } />)
        openCloseModal()
    }

    const updateTable = ( data ) => {
        setTitleModal("Actualizar mesa")
        setContentModal(<EditAddTable onClose={ openCloseModal } onRefresh={ onRefresh } table={ data } />)
        openCloseModal()
    }

    return (

        <>
            <HeaderPage title="Mesas" btnTitle="Crear nueva mesa" btnClick={ addTable }/>
            {
                loading ? (
                    <Loader active inline="centered">
                        Cargando...
                    </Loader>
                ) : (
                    <TableComponent tables={ tables } updateTable={ updateTable } />
                )
            }  
            <ModalBasic show={ showModal } onClose={ openCloseModal } title={ titleModal } children={ contentModal } />  
        </>

    )

}
