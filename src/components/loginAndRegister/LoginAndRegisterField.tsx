import React from 'react'
// import { LoginAndRegisterFieldProps } from '../../interfaces/loginAndRegisterInterfaces'

export interface LoginAndRegisterFieldProps {
    fieldType: 'text' | 'password' | 'date'
    placeHolderValue:string
    textDescription:string
    onChange: React.ChangeEventHandler<HTMLElement>
    name: 'username' | 'mailAddress' | 'password' | 'password2' | 'birthdate'
}

const LoginAndRegisterField:React.FC<LoginAndRegisterFieldProps> = ({fieldType, placeHolderValue, textDescription, onChange, name}) => {

    return (
        <div className='loginAndRegisterField'>
            <p>{textDescription}</p>
            <input 
                type={fieldType} 
                placeholder={placeHolderValue}
                onChange={onChange}
                name={name}
            />
        </div>
    )
}

export default LoginAndRegisterField