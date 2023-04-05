import React, { useEffect, useState } from 'react'
import { Loader } from "semantic-ui-react"
import { useUser } from "../../../hooks"
import { HeaderPage, TableUsers } from "../../../components/admin";
import { ModalBasic } from '../../../components/common';

export const UserAdmin = () => {

    const { loading, users, getUsers } = useUser();
    const [ titleModal, setTitleModal ] = useState(null);
    const [ showModal, setShowModal ] = useState(false);
    const [ contentModal, setContentModal ] = useState({});

    useEffect(() => {
        getUsers();
    }, []);

    const openCloseModal = () => {
        setShowModal((prevState) => !prevState)
    }

    return (

        <>
            <HeaderPage title="Usuarios" btnTitle="Nuevo usuario" btnClick={ openCloseModal }/>
            { loading ? (
                <Loader active inline="centered">
                    Cargando... 
                </Loader>
            ): (
                <TableUsers users={ users }/>
            )}
            <ModalBasic show={ showModal } title="Crear usuario" onClose={ openCloseModal }>
                <p>Holaa</p>
            </ModalBasic>
        </>
        
    )

}
