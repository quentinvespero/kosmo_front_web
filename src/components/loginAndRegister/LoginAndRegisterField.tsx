import React from 'react'
import { LoginAndRegisterFieldProps } from '../../interfaces/loginAndRegisterInterfaces'

const LoginAndRegisterField:React.FC<LoginAndRegisterFieldProps> = ({fieldType, placeHolderValue, textDescription}) => {
    return (
        <div className='loginAndRegisterField'>
            <p>{textDescription}</p>
            <input type={fieldType} placeholder={placeHolderValue}/>
        </div>
    )
}

export default LoginAndRegisterField