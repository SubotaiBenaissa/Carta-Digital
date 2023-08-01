import React from 'react'
import { map, size } from 'lodash'
import { TableItem } from '../tableitem'
import "./TableList.scss"

export const TableList = ({ tables }) => {

    return (

        <div className="tables-list-admin">
            {
                map(tables, (table) => (
                    <TableItem key={ table.number } table={ table }/>
                ))
            }
        </div>

    )

}
