import { useState } from "react"
import { getCategoriesAPI, createCategoryAPI, editCategoryAPI, deleteCategoryAPI } from "../api/category"
import { useAuth } from "."

export function useCategory () {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [categories, setCategories] = useState(null);
    const { auth } = useAuth()

    const getCategories = async() => {

        try {

            setLoading(true)
            const response = await getCategoriesAPI()
            setLoading(false)
            setCategories(response)

        } catch(error) {

            setLoading(false)
            setError(error)

        }

    }

    const addCategory = async( data ) => {

        try {

            setLoading(true)
            await createCategoryAPI(data, auth.token)
            setLoading(false)
            
        } catch (error) {

            setLoading(false)
            setError(error)

        }

    }

    const editCategory = async( id, data ) => {

        try {

            setLoading(true)
            await editCategoryAPI(id, data, auth.token)
            setLoading(false)

        } catch (error) {
            
            setLoading(false)
            setError(error)

        }

    }

    const deleteCategory = async(id) => {

        try {

            setLoading(true)
            await deleteCategoryAPI( id, auth.token )
            setLoading(false)
            
        } catch (error) {
            
            setLoading(false)
            setError(error)

        }

    }

    return {
        loading,
        error,
        categories,
        getCategories,
        addCategory,
        editCategory,
        deleteCategory
    }

}