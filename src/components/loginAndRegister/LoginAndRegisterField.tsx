import React from 'react'
import { LoginAndRegisterFieldProps } from '../../interfaces/loginAndRegisterInterfaces'

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