import { useState } from 'react'
import './SelectTable.scss'
import { useTable } from "../../../hooks"
import { useNavigate } from "react-router-dom"
import { Form, Button } from "semantic-ui-react"

export const SelectTable = () => {

    const [tableNum, setTableNum] = useState(null)
    const [error, setError] = useState(null)
    const { existingTable } = useTable()
    const navigate = useNavigate()

    const onSubmit = async() => {

        setError(null)

        if ( !tableNum ) {
            setError("No se ha seleccionado ninguna mesa")
        } else {
            const exist = await existingTable(tableNum)
            console.log(tableNum)
            if(exist) navigate(`/client/${ tableNum }`)
            else setError("El número de la mesa no existe")
        }
        
    }
 
    return (
        <div className="select-table">
            <div className="select-table__content">
                <h1>Bienvenido a la carta digital</h1>
                <h2>Introduce tu número de la mesa</h2>
                <Form onSubmit={ onSubmit }>
                    <Form.Input placeholder="Ejemplo: 1, 2, 3" type='number' onChange={ (_, data) => setTableNum(data.value) } />
                    <Button primary fluid>
                        Entrar
                    </Button>
                </Form>
                <p className='select-table__content-error'>
                    { error }
                </p>
            </div>
        </div>
    )
    
}
