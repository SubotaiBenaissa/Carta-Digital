import React, { useEffect, useState } from 'react'
import { HeaderPage, TableComponent, EditAddTable } from '../../components/admin'
import { ModalBasic } from "../../components/common"
import { useTable } from '../../hooks'
import { Loader } from 'semantic-ui-react'

export const TablesAdmin = () => {

    const [showModal, setShowModal] = useState(false)
    const [titleModal, setTitleModal] = useState("")
    const [contentModal, setContentModal] = useState(null)
    const { tables, loading, getTables } = useTable()

    useEffect(() => {
        
        getTables()

    }, [])

    const openCloseModal = () => setShowModal((prev) => !prev)

    const addTable = () => {
        setTitleModal("Crear mesa")
        setContentModal(<EditAddTable onClose={ openCloseModal } />)
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
                    <TableComponent tables={ tables } />
                )
            }  
            <ModalBasic show={ showModal } onClose={ openCloseModal } title={ titleModal } children={ contentModal } />  
        </>

    )

}
