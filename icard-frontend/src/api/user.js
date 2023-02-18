import { BASE_PATH } from "../utils/constants"; 

export async function loginApi(formData) {

    try {
        
        const url = `${BASE_PATH}/api/auth/login/`
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

        const result = await response.json();

        return result

    } catch (error) {
        
        throw error

    }

}