import { useState } from "react"
import { getMeApi } from "../api/user"

export const useUser = () => {

    const [loading, setLoading] = useState(false);

    const getMe = async(token) => {

        try {

            const response = await getMeApi(token);
            return response

        } catch (error) {

            throw error;

        }
    }

    const getUsers = async() => {

        try {
            


        } catch (error) {
            
            throw error

        }

    }

    return {
        getMe,
    }

}