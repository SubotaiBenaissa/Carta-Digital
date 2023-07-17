import { BASE_PATH } from "../utils/constants";

export async function getCategoriesAPI() {

    try {
        
        const url = `${BASE_PATH}/api/categorias/`;
        const response = await fetch(url);
        const result = response.json();
        return result

    } catch (error) {
        
        throw error

    }

}

export async function createCategoryAPI( data, token ) {

    try {
        
        const formData = new FormData();
        formData.append('image', data.image);
        formData.append('title', data.title);

        const url = `${BASE_PATH}/api/categorias/`
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

export async function editCategoryAPI( id, data, token ) {

    try {

        const formData = new FormData()
        formData.append("title", data.title);
        if (data.image) formData.append('image', data.image)

        const url = `${BASE_PATH}/api/categorias/${id}/`
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