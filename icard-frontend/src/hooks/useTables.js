import { useState } from 'react'
import { getTablesAPI } from '../api/tables'
import { useAuth } from './useAuth'

export function useTable() {

    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(null)
    const [tables, setTables] = useState(null)
    const { auth } = useAuth()

    const getTables = async() => {

        try {

            setLoading(true)
            const response = await getTablesAPI( auth.token )
            setLoading(false)
            setTables(response)
            
        } catch (error) {

            setLoading(false)
            setErrors(error)

        }

    }

    return {
        loading,
        errors,
        tables,
        getTables
    }

}