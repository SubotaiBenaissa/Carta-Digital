import React from 'react'
import { Label, Button, Icon, Checkbox } from 'semantic-ui-react'
import tablesvg from '../../../../assets/table.svg'
import "./TableItem.scss"

export const TableItem = ({ table }) => {

    return (
        <div className="table-item">
            <img src={ tablesvg } alt="" />
            <p>Mesa { table.number }</p>
        </div>
    )

}
