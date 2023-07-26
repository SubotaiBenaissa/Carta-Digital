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

export async function addTableAPI( data, token ) {

    try {

        const url = `${ BASE_PATH }/api/mesas/`
        const params = {
            headers: {
                method: 'POST',
                Authorization: `Bearer ${ token }`,
                "Content-Type": "application/json"
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