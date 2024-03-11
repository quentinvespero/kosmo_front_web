import React from 'react'
import { LoginAndRegisterFieldProps } from '../../interfaces/loginAndRegisterInterfaces'

const LoginAndRegisterField:React.FC<LoginAndRegisterFieldProps> = ({fieldType, placeHolderValue, textDescription, setFieldsValues, onChange}) => {

    return (
        <div className='loginAndRegisterField'>
            <p>{textDescription}</p>
            <input 
                type={fieldType} 
                placeholder={placeHolderValue}
                onChange={onchange()}
                name={}
            />
        </div>
    )
}

export default LoginAndRegisterField