import React from 'react'
import { Icon, Menu } from "semantic-ui-react"
import { useAuth } from "../../../hooks"
import './TopMenu.scss'

export const TopMenu = () => {

    const { auth, logout } = useAuth();

    return (

        <Menu fixed="top" className="top-menu-admin">
            <Menu.Item className="top-menu-admin__logo">
                <p>iCard Admin</p>
            </Menu.Item>
            <Menu.Menu position="right">
                <Menu.Item>Hola, usuario xd</Menu.Item>
                <Menu.Item onClick={ logout }>
                    <Icon name="sign-out" />
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    
    )

}