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

export async function getMeApi( token ) {

    try {

        const url = `${BASE_PATH}/api/auth/me`;
        const params = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const response = await fetch(url, params);
        const result = await response.json()
        return result

    } catch (error) {

        throw error

    }

}

export async function getUserApi( token ) {
    
    try {
        
        const url = `${BASE_PATH}/api/userUsuarios`
        const params = {
            headers: {
                authorization: `Bearer ${token}`,
            },
        }
        const response = await fetch( url, params );
        const result = await response.json();
        return result;

    } catch (error) {
        
        throw error

    }

}

export async function addUserAPI(data, token) {

    try {

        const url = `${ BASE_PATH }/api/userUsuarios/`;
        const params = {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        };
        const response = await fetch(url, params);
        const result = await response.json()
        return result

    } catch (error) {

        throw error;

    }

}

export async function updateUserAPI( id, data, token ) {

    try {

        const url = `${ BASE_PATH }/api/users/${ id }/`;
        const params = {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        }
        const response = await fetch(url, params);
        const result = await response.json()
        return result
        
    } catch (error) {

        throw error

    }

}