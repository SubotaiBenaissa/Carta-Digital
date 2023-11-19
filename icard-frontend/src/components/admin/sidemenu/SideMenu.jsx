import React from 'react'
import { Menu, Icon } from "semantic-ui-react"
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from "../../../hooks"
import "./SideMenu.scss"

const MenuLeft = ({ pathname }) => {

    const { auth } = useAuth();

    return (
        <Menu fixed="left" borderless className="side" vertical>
            <Menu.Item as={ Link } to={ '/admin' }>
                <Icon name="home" /> Pedidos
            </Menu.Item>
            <Menu.Item as={ Link } to={ '/admin/table' }>
                <Icon name="table" /> Mesas
            </Menu.Item>
            <Menu.Item as={ Link } to={ '/admin/payments-history' }>
                <Icon name="history" /> Historial de pagos
            </Menu.Item>
            <Menu.Item as={ Link } to={ '/admin/categories' }>
                <Icon name="folder" /> Categorías
            </Menu.Item>
            <Menu.Item as={ Link } to={ '/admin/products' }>
                <Icon name="cart" /> Productos
            </Menu.Item>
            
            {auth.me?.is_staff && (
            <Menu.Item as={ Link } to={ '/admin/user' }>
                <Icon name="users" /> Usuarios
            </Menu.Item>
            )}
            
        </Menu>
    )

}

export const SideMenu = ({ children }) => {

    const { pathname } = useLocation()

    return (

        <div className="side-menu-admin">
            <MenuLeft pathname={ pathname }/>
            <div className="content">{ children }</div>
        </div>

    )

}