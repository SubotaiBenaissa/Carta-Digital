import { useState } from 'react'
import { size } from 'lodash'
import { getTablesAPI, addTableAPI, updateTableAPI, deleteTableAPI, getTableAPI, getTableByNumberAPI } from '../api/tables'
import { useAuth } from './useAuth'

export function useTable() {

    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(null)
    const [tables, setTables] = useState(null)
    const [table, setTable] = useState(null)

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

    const getTable = async( id ) => {

        try {

            setLoading(true)
            const response = await getTableAPI(id)
            setLoading(false)
            setTable(response)
            
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

    const deleteTable = async( id ) => {

        try {

            setLoading(true)
            await deleteTableAPI( id, auth.token )
            setLoading(false)
            
        } catch (error) {
            
            setLoading(false)
            setErrors(error)

        }

    }

    const existingTable = async( tableNumber ) => {

        try {
            
            const response = await getTableByNumber( tableNumber )
            if (size(response) === 0) throw Error()
            return true

        } catch (error) {
            
            setErrors(error)

        }

    }

    const getTableByNumber = async( tableNumber ) => {

        try {
            
            const response = await getTableByNumberAPI( tableNumber )
            return response

        } catch (error) {
            
            setErrors(error)

        }

    }

    return {
        loading,
        errors,
        tables,
        table,
        getTables,
        getTable,
        addTable,
        updateTable,
        deleteTable,
        existingTable,
        getTableByNumber
    }

}