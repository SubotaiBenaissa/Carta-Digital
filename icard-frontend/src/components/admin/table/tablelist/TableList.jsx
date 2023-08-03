import React, { useState } from 'react'
import { Button, Icon, Checkbox } from "semantic-ui-react"
import { map, size } from 'lodash'
import { TableItem } from '../tableitem'
import "./TableList.scss"

export const TableList = ({ tables }) => {

    const [reload, setReload] = useState(false)

    const onReload = () => {
        setReload((prev) => !prev)
    }

    return (

        <div className="tables-list-admin">
            <Button primary icon className="tables-list-admin__reload" onClick={() => console.log('Reload')}>
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
