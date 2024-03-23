import { UserBaseInformations } from "../../../interfaces/datasInterfaces"
import { createUser } from "../UserFetches"
import { registerFieldsValidation } from "./fieldsValidation"

export const useAuth = () => {

    const register = async (userData: UserBaseInformations) => {
    
        console.log('Registering user...')

        if (registerFieldsValidation(userData)){
            try {
                console.log('Creating user...')
                const response = await createUser(userData)
                return response
            }
            catch (error) {
                console.error('Error creating user:', error)
                throw error
            }
        }
        else {
            console.error('Registration error: missing fields')
            throw new Error('Missing fields')
        }
    }
    return { register }
}