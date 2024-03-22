import React from 'react'
import { LoginAndRegisterFieldProps, LoginAndRegisterPanelsProps } from '../../interfaces/loginAndRegisterInterfaces'
import LoginAndRegisterField from './LoginAndRegisterField'
import { DatasInterfaces, UserBaseInformations } from '../../interfaces/datasInterfaces'

const Register:React.FC<LoginAndRegisterPanelsProps> = ({setSelectedPanel, setFieldsValues}) => {

    const handleFieldChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        
        // here, name and value are similar to say "e.target.name" and "e.target.value"
        const { name, value } = e.target

        // console.log(e.target.name, e.target.value)
        // console.log([name],value)

        // Skip password2 from being added to fieldsValues
        if (name === 'password2') {
            return
        }

        // Update the fieldsValues state by spreading the previous values and updating the changed value
        if (setFieldsValues) {
            
            // here, previousValueOfFieldsValues is the value of fieldsValues's state, before storing some new elements in it
            // if a property of the same name as [name] exist, its value will be updated by the new value
            // [name] is the name of the field (input) | value is the value of that field
            setFieldsValues(previousValueOfFieldsValues => ({
                // 1 - we get the values of current values in fieldsValues --> "...previousValueOfFieldsValues"
                // 2 - we add/update the new value to the previously gathered fieldsValues --> ", [name]: value"
                // the ... are spreading, used to gather the values of fieldsValues
                ...previousValueOfFieldsValues,[name]: value
            }))
        }
    }

    return (
        <div className='register loginAndRegister-panels'>
            <h3>Let's create an account then</h3>
            <LoginAndRegisterField 
                textDescription='Username' 
                fieldType='text' 
                placeHolderValue='Type your username' 
                // setFieldsValues={setFieldsValues}
                onChange={handleFieldChange}
                name='username'
            />
            <LoginAndRegisterField 
                textDescription='Mail address' 
                fieldType='text' 
                placeHolderValue='Type your mail address' 
                // setFieldsValues={setFieldsValues}
                onChange={handleFieldChange}
                name='mailAddress'
            />
            <LoginAndRegisterField 
                textDescription='Password' 
                fieldType='password' 
                placeHolderValue='Type your password' 
                // setFieldsValues={setFieldsValues}
                onChange={handleFieldChange}
                name='password'
            />
            <LoginAndRegisterField 
                textDescription='Password verification' 
                fieldType='password' 
                placeHolderValue='Type your password a 2nd time' 
                // setFieldsValues={setFieldsValues}
                onChange={handleFieldChange}
                name='password2'
            />
            <LoginAndRegisterField 
                textDescription='How old are you ?' 
                fieldType='date' 
                placeHolderValue='' 
                // setFieldsValues={setFieldsValues}
                onChange={handleFieldChange}
                name='birthdate'
            />
        </div>
    )
}

export default Register