import React from 'react'
import { Menu, Icon } from "semantic-ui-react"
import "./SideMenu.scss"

const MenuLeft = ({}) => {

    return (
        <Menu fixed="left" borderless className="side" vertical>
            <Menu.Item>
                <Icon name="home" /> Pedidos
            </Menu.Item>
        </Menu>
    )

}

export const SideMenu = ({ children }) => {

    return (

        <div className="side-menu-admin">
            <MenuLeft />
            <div className="content">{ children }</div>
        </div>

    )

}