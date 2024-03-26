import useSWR from "swr"
import { DatasInterfaces, UserBaseInformations } from "../../interfaces/datasInterfaces"
import { del, get, post, put } from "./fetcher"

// getting user informations
export const fetchUserInformations = (userId:Partial<DatasInterfaces['users']>) => {
    
    const {data, error, mutate} = useSWR(`/user/${userId}`, get)

    return {
        userdata:data,
        isLoading: !error && !data,
        isError: error, 
        mutate
    }
}

// create a user
export const createUser = async (userData:UserBaseInformations) => {
    try {
        const response = await post('/user/register', userData)
        return response
    }
    catch (error) {
        console.error('Error creating user:', error)
        throw error
    }
}

// update a user
export const updateUser = async (userId: DatasInterfaces['users'], userData: DatasInterfaces['users']) => {
    try {
        const response = await put(`/user/${userId}`, userData)
        return response
    }
    catch (error) {
        console.error('Error updating user:', error)
        throw error
    }
}

// delete a user
export const deleteUser = async (userId: DatasInterfaces['users']) => {
    try {
        const response = await del(`/user/${userId}`)
        return response
    }
    catch (error) {
        console.error('Error deleting user:', error)
        throw error
    }
}