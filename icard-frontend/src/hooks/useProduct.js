import { useState } from "react" 
import { getProductsAPI, addProductAPI } from "../api/product"
import { useAuth } from "."

export const useProduct = () => {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [products, setProducts] = useState(null)
    const { auth } = useAuth()

    const getProducts = async() => {

        try {

            setLoading(true)
            const response = await getProductsAPI()
            setLoading(false)
            setProducts(response)
            
        } catch (error) {

            setLoading(false)
            setError(error)
            
        }

    }

    const addProduct = async( data ) => {

        try {
            
            setLoading(true)
            await addProductAPI( data, auth.token )
            setLoading(false)

        } catch (error) {

            setLoading(false)
            setError(error)
        
        }

    }

    return {
        loading,
        error,
        products,
        getProducts,
        addProduct,
    }

}