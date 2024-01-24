import React, { useEffect } from 'react'
import { HeaderPage } from "../../components/admin"
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
                    <h2>Tabla de pagos</h2>
                )
            }
        </>
    )

}
