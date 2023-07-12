import React, { useEffect, useState } from 'react'
import { Loader } from "semantic-ui-react"
import { useUser } from "../../../hooks"
import { HeaderPage, TableUsers, EditAddUser } from "../../../components/admin";
import { ModalBasic } from '../../../components/common';

export const UserAdmin = () => {

    const { loading, users, getUsers } = useUser();
    const [ titleModal, setTitleModal ] = useState(null);
    const [ showModal, setShowModal ] = useState(false);
    const [refresh, setRefresh] = useState(false)
    const [ contentModal, setContentModal ] = useState(null);

    useEffect(() => {
        getUsers();
    }, [refresh]);

    const updateUser = (data) => {
        setTitleModal("Editar usuario")
        setContentModal(<EditAddUser onClose={ openCloseModal } onRefresh={ onRefresh } user={ data }/>)
        openCloseModal();
    }

    const openCloseModal = () => {
        setShowModal((prevState) => !prevState)
    }

    const onRefresh = () => {
        setRefresh((prev) => !prev)
    }

    const addUser = () => {
        setTitleModal("Nuevo Usuario")
        setContentModal(<EditAddUser onClose={ openCloseModal } onRefresh={ onRefresh }/>)
        openCloseModal();
    }

    const deleteUser = async( data ) => {
        const result = confirm(`Desea eliminar al usuario ${data.username} ?`)
        if(result) console.log("usuario eliminado")
    }

    return (

        <>
            <HeaderPage title="Usuarios" btnTitle="Nuevo usuario" btnClick={ addUser }/>
            { loading ? (
                <Loader active inline="centered">
                    Cargando... 
                </Loader>
            ): (
                <TableUsers users={ users } updateUser={ updateUser } onDeleteUser={ deleteUser }/>
            )}
            <ModalBasic show={ showModal } title={ titleModal } onClose={ openCloseModal }>
                { contentModal }
            </ModalBasic>
        </>
        
    )

}
