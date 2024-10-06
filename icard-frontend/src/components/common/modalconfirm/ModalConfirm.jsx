import React from 'react'
import { Button, Modal, ModalHeader } from 'semantic-ui-react'
import './ModalConfirm.scss'

export const ModalConfirm = ({ title, show, onClose, onCloseText, onConfirm, onConfirmText }) => {

    return (
        <Modal 
            className='modal-confirm' 
            open={ show }
            onClose={ onClose }
            size="mini"
        >
            {
                title && <ModalHeader>{ title }</ModalHeader>
            }
            <Modal.Actions>
                <Button negative onClick={ onClose }>
                    {
                        onCloseText || "Cancelar"
                    }
                </Button>
                <Button positive onClick={ onConfirm }>
                    {
                        onConfirmText || "Aceptar"
                    }
                </Button>
            </Modal.Actions>
        </Modal>
    )

}
