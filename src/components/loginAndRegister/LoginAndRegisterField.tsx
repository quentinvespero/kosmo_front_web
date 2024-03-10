import React from 'react'
import { LoginAndRegisterFieldProps } from '../../interfaces/loginAndRegisterInterfaces'

const LoginAndRegisterField:React.FC<LoginAndRegisterFieldProps> = ({fieldType, placeHolderValue, textDescription, setFieldsValues, onChange}) => {

    const givingName = () => {
        if (textDescription.includes('Username')) {
            return 'username'
        }
        else if (textDescription.includes('Mail')) {
            return 'mailAddress'
        }
        else if (textDescription.includes('Password')) {
            return 'password'
        }
        else if (textDescription.includes('Password')) {
            return 'password'
        }
    }

    return (
        <div className='loginAndRegisterField'>
            <p>{textDescription}</p>
            <input 
                type={fieldType} 
                placeholder={placeHolderValue}
                onChange={onchange()}
                name={givingName()}
            />
        </div>
    )
}

export default LoginAndRegisterField