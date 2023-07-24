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

export async function addProductAPI( data, token ) {

    try {

        const formData = new FormData()
        formData.append('title', data.title)
        formData.append('price', data.price)
        formData.append('category', data.category)
        formData.append('active', data.active)
        formData.append('image', data.image)

        const url = `${ BASE_PATH }/api/products/`;
        const params = {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${ token }`
            },
            body: formData
        }
        const response = await fetch(url, params)
        const result = await response.json()
        return result
        
    } catch (error) {
        
        throw error

    }

}

export async function updateProductAPI( id, data, token ) {

    try {

        const formData = new FormData()
        formData.append('title', data.title)
        formData.append('price', data.price)
        formData.append('category', data.category)
        formData.append('active', data.active)
        if( data.image ) formData.append('image', data.image)

        const url = `${ BASE_PATH }/api/products/${id}/`;
        const params = {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${ token }`
            },
            body: formData
        }
        const response = await fetch(url, params)
        const result = await response.json()
        return result
        
    } catch (error) {
        
        throw error

    }

}