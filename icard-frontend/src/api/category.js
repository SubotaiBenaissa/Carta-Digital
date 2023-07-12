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