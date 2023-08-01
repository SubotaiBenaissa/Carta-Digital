import React from 'react'
import { Label, Button, Icon, Checkbox } from 'semantic-ui-react'
import { map, size } from 'lodash'
import table from '../../../../assets/table.svg'
import "./TableList.scss"

export const TableList = ({ tables }) => {

    return (

        <div className="tables-list-admin">
            {
                map(tables, (table) => (
                    <h2>Mesa</h2>
                ))
            }
        </div>

    )

}
