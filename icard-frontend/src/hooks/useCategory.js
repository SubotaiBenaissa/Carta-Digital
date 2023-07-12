import { useState } from "react"
import { getCategoriesAPI } from "../api/category"

export function useCategory () {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [categories, setCategories] = useState(null);

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

    return {
        loading,
        error,
        categories,
        getCategories,
    }

}