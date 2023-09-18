import { useState } from "react" 
import { getProductsAPI, addProductAPI, updateProductAPI, deleteProductAPI, getProductByIdAPI } from "../api/product"
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

    const getProductByID = async(id) => {

        try {
            
            const product = await getProductByIdAPI(id)
            return product

        } catch (error) {

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

    const updateProduct = async( id, data ) => {

        try {

            setLoading(true)
            await updateProductAPI( id, data, auth.token )
            setLoading(false)
            
        } catch (error) {

            setLoading(false)
            setError(error)

        }

    }

    const deleteProduct = async( id ) => {

        try {

            setLoading(true)
            await deleteProductAPI( id, auth.token )
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
        getProductByID,
        addProduct,
        updateProduct,
        deleteProduct
    }

}