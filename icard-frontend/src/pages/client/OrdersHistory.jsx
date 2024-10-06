import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { map, size, forEach } from "lodash"
import { useOrder, useTable } from '../../hooks'
import { OrderHistoryItem } from '../../components/client'
import { ModalConfirm } from "../../components/common"
import { Button } from 'semantic-ui-react'

export const OrdersHistory = () => {

    const { loading, orders, getOrderByTable } = useOrder()
    const [showTypePayment, setShowTypePayment] = useState(false)
    const { getTableByNumber } = useTable()
    const { tableNumber } = useParams()

    const getTableInfo = async() => {

        const table = await getTableByNumber(tableNumber)
        const idTable = table[0].id
        getOrderByTable(idTable, "", "ordering=-status,-created_at")

    }

    useEffect(() => {
        getTableInfo()
    }, [])

    console.log(orders)
    
    return (

        <div>
            <h1>Historial de pedidos</h1>

            {
                loading ? (
                    <p>Cargando</p>
                ) : (
                    <>
                    {
                        size(orders) > 0 && (
                            <Button primary fluid onClick={ () => setShowTypePayment(true) }>
                                Pedir la cuenta
                            </Button>
                        )
                    }
                    {
                        map( orders, ( order ) => (
                            <OrderHistoryItem key={ order.id } order={ order } />
                        ) )
                    }
                    </>
                )
            }

            <ModalConfirm 
                title="Pagar con tarjeta o efectivo"
                show={ showTypePayment }
                onCloseText="Efectivo"
                onClose={ () => console.log("Pagar con efectivo") }
                onConfirmText="Tarjeta"
                onConfirm={ () => console.log("Pagar con tarjeta") }
            />

        </div>
    )

}
