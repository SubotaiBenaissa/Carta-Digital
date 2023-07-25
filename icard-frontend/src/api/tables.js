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