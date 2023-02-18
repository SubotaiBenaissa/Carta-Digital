import { BASE_PATH } from "../utils/constants"; 

export async function loginApi(formData) {

    try {
        
        const url = `${BASE_PATH}/auth/login`
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        };

        const response = await fetch(url, params);

        if( response.status !== 200 ) {
            throw new Error("Usuario o contraseña incorrectos")
        }

        return result = await response.json();

    } catch (error) {
        
        throw error

    }

}