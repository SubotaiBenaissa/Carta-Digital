import { useState } from "react"
import { getMeApi, getUserApi, addUserAPI, updateUserAPI, deleteUserAPI } from "../api/user"
import { useAuth } from "./useAuth"

export const useUser = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [users, setUsers] = useState(null);

    const { auth } = useAuth();

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
            
            setLoading(true)
            const response = await getUserApi(auth.token)
            setLoading(false)
            setUsers(response)

        } catch (error) {
            
            setLoading(false)
            setError(error)

        }

    }

    const addUser = async( data ) => {

        try {

            setLoading(true);
            await addUserAPI(data, auth.token)
            setLoading(false)

        } catch (error) {

            setLoading(false)
            setError(error)

        }

    }

    const updateUser = async(id, data) => {

        try {

            setLoading(true)
            await updateUserAPI(id, data, auth.token)
            setLoading(false)
            
        } catch (error) {

            setLoading(false)
            setError(error)

        }

    }

    const deleteUser = async( id ) => {

        try {
            
            setLoading(true)
            await deleteUserAPI(id, auth.token)
            setLoading(false)

        } catch (error) {
            
            setLoading(false)
            setError(error)

        }

    }

    return {
        loading,
        error,
        users,
        getMe,
        getUsers,
        addUser,
        updateUser,
        deleteUser
    }

}