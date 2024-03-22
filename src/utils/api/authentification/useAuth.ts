import { UserBaseInformations } from "../../../interfaces/datasInterfaces"
import { createUser } from "../UserFetches"
import { registerFieldsValidation } from "./fieldsValidation"

export const useAuth = () => {

    const register = async (userData: UserBaseInformations) => {
    
        if (registerFieldsValidation(userData)){
            try {
                const response = await createUser(userData)
                return response
            }
            catch (error) {
                console.error('Error creating user:', error)
                throw error
            }
        }
    }
    return { register }
}