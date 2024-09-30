import { BASE_PATH } from "../utils/constants";

export async function getTablesAPI( token ) {

    try {

        const url = `${ BASE_PATH }/api/mesas/`
        const params = {
            headers: {
                Authorization: `Bearer ${ token }`
            }
        }
        
        const response = await fetch(url, params)
        const result = response.json()
        return result

    } catch (error) {

        throw error

    }

}

export async function getTableAPI(id) {

    try {

        const url = `${ BASE_PATH }/api/mesas/${id}/`;
        const response = await fetch(url);
        const result = await response.json()
        return result
        
    } catch (error) {
        
        throw error

    }

}

export async function getTableByNumberAPI( numberTable ) {

    try {
        
        const tableFilter = `number=${ numberTable }`
        const url = `${BASE_PATH}/api/mesas/?${ tableFilter }`
        const response = await fetch(url);
        const result = await response.json()
        return result

    } catch (error) {
        
        throw error

    }

}

export async function addTableAPI( data, token ) {

    try {

        const url = `${ BASE_PATH }/api/mesas/`
        const params = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${ token }`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }

        const response = await fetch(url, params)
        const result = await response.json()
        return result
        
    } catch (error) {
        
        throw error

    }

}

export async function updateTableAPI( id, data, token ) {

    try {

        const url = `${ BASE_PATH }/api/mesas/${id}/`
        const params = {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${ token }`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify( data )
        }

        const response = await fetch(url, params)
        const result = await response.json()
        return response
        
    } catch (error) {

        throw error
    
    }

}

export async function deleteTableAPI( id, token ) {

    try {

        const url = `${ BASE_PATH }/api/mesas/${ id }/`
        const params = {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${ token }`
            }
        }

        const response = await fetch(url, params)
        const result = await response.json()
        return result
        
    } catch (error) {
        
        throw error

    }

}