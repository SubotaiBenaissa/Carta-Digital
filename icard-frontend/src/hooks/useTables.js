import { useState } from 'react'
import { getTablesAPI, addTableAPI, updateTableAPI } from '../api/tables'
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
    
    const addTable = async( data ) => {

        try {

            setLoading(true)
            await addTableAPI( data, auth.token )
            setLoading(false)
            
        } catch (error) {
            
            setLoading(false)
            setErrors(error)

        }

    }

    const updateTable = async( id, data ) => {

        try {

            setLoading(true)
            await updateTableAPI( id, data, auth.token )
            setLoading(false)
            
        } catch (error) {
            
            setLoading(false)
            setErrors(error)

        }

    }

    return {
        loading,
        errors,
        tables,
        getTables,
        addTable,
        updateTable
    }

}