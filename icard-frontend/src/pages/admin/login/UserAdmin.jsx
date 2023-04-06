import React, { useEffect, useState } from 'react'
import { Loader } from "semantic-ui-react"
import { useUser } from "../../../hooks"
import { HeaderPage, TableUsers } from "../../../components/admin";
import { ModalBasic } from '../../../components/common';

export const UserAdmin = () => {

    const { loading, users, getUsers } = useUser();
    const [ titleModal, setTitleModal ] = useState(null);
    const [ showModal, setShowModal ] = useState(false);
    const [ contentModal, setContentModal ] = useState(null);

    useEffect(() => {
        getUsers();
    }, []);

    const openCloseModal = () => {
        setShowModal((prevState) => !prevState)
    }

    const addUser = () => {
        setTitleModal("Nuevo Usuario")
        setContentModal(<h2>Form para usuarios</h2>)
        openCloseModal();
    }

    return (

        <>
            <HeaderPage title="Usuarios" btnTitle="Nuevo usuario" btnClick={ addUser }/>
            { loading ? (
                <Loader active inline="centered">
                    Cargando... 
                </Loader>
            ): (
                <TableUsers users={ users }/>
            )}
            <ModalBasic show={ showModal } title={ titleModal } onClose={ openCloseModal }>
                { contentModal }
            </ModalBasic>
        </>
        
    )

}
