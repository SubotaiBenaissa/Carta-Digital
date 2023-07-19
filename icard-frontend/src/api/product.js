import { BASE_PATH } from "../utils/constants";

export async function getProductsAPI() {

    try {
        
        const url = `${ BASE_PATH }/api/products/`
        const response = await fetch(url)
        const result = await response.json()
        return result

    } catch (error) {

        throw error
        
    }

}