import React from 'react'
import { LoginAndRegisterPanelsProps } from '../../interfaces/loginAndRegisterInterfaces'
import LoginAndRegisterField from './LoginAndRegisterField'

const Register:React.FC<LoginAndRegisterPanelsProps> = ({setSelectedPanel, setFieldsValues}) => {

    const handleFieldChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        
        const { name, value } = e.target

        // Update the fieldsValues state by spreading the previous values and updating the changed value
        if (setFieldsValues) {
            setFieldsValues(prev => ({ ...prev, [name]: value }))
        }
    }

    return (
        <div className='register loginAndRegister-panels'>
            <h3>Let's create an account then</h3>
            <LoginAndRegisterField 
                textDescription='Username' 
                fieldType='text' 
                placeHolderValue='Type your username' 
                setFieldsValues={setFieldsValues}
                onChange={handleFieldChange}
            />
            <LoginAndRegisterField 
                textDescription='Mail address' 
                fieldType='text' 
                placeHolderValue='Type your mail address' 
                setFieldsValues={setFieldsValues}
                onChange={handleFieldChange}
            />
            <LoginAndRegisterField 
                textDescription='Password' 
                fieldType='password' 
                placeHolderValue='Type your password' 
                setFieldsValues={setFieldsValues}
                onChange={handleFieldChange}
            />
            <LoginAndRegisterField 
                textDescription='Password verification' 
                fieldType='password' 
                placeHolderValue='Type your password a 2nd time' 
                setFieldsValues={setFieldsValues}
                onChange={handleFieldChange}
            />
            <LoginAndRegisterField 
                textDescription='How old are you ?' 
                fieldType='date' 
                placeHolderValue='' 
                setFieldsValues={setFieldsValues}
                onChange={handleFieldChange}
            />
        </div>
    )
}

export default Register