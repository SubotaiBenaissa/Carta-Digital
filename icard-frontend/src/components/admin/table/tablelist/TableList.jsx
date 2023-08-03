import React, { useState, useEffect } from 'react'
import { Button, Icon, Checkbox } from "semantic-ui-react"
import { map, size } from 'lodash'
import { TableItem } from '../tableitem'
import "./TableList.scss"

export const TableList = ({ tables }) => {

    const [reload, setReload] = useState(false)
    const [autoReload, setAutoReload] = useState(false)

    const onReload = () => {
        setReload((prev) => !prev)
    }

    useEffect(() => {
        if(autoReload) {
            const autoReloadAction = () => {

                onReload()

                setTimeout(() => {
                    autoReloadAction()
                }, 5000)
            }
        }
    }, [autoReload])

    return (

        <div className="tables-list-admin">
            <Button primary icon className="tables-list-admin__reload" onClick={ onReload }>
                <Icon name="refresh"></Icon>
            </Button>
            <div className="tables-list-admin__reload-toggle">
                <span>Reload automático</span>
                <Checkbox toggle onChange={ (_, data) => console.log(data.checked) }/>
            </div>
            {
                map(tables, (table) => (
                    <TableItem key={ table.number } table={ table } reload={ onReload }/>
                ))
            }
        </div>

    )

}
