import { UserBaseInformations } from "../../../interfaces/datasInterfaces"

// fields validation for register authentification
export const registerFieldsValidation = (fieldsValues: UserBaseInformations): boolean => {
    const requiredFields = ['username', 'mailAddress', 'password', 'birthdate']

    for (const field of requiredFields) {
        if (!fieldsValues[field as keyof UserBaseInformations]) return false
    }

    return true
}

// fields validation for login authentification
export const loginFieldsValidation = () => {
    
}