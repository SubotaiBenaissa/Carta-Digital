import React, { useEffect } from 'react'
import { HeaderPage, TablePayments } from "../../components/admin"
import { usePayment } from "../../hooks"
import { Loader } from 'semantic-ui-react';

export const PaymentHistory = () => {

    const { loading, payments, getPayments } = usePayment();

    useEffect(() => {
        getPayments()
    }, [])

    console.log(payments)

    return (
        <>
            <HeaderPage title="Historial de pagos" />
            {
                loading ? (
                    <Loader active inline>
                        Cargando...
                    </Loader>
                ) : (
                    <TablePayments payments={ payments } />
                )
            }
        </>
    )

}
