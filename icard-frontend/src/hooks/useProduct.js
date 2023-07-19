import { useState } from "react" 
import { getProductsAPI } from "../api/product"

export const useProduct = () => {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [products, setProducts] = useState(null)

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

    return {
        loading,
        error,
        products,
        getProducts
    }

}