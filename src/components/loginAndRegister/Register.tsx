import React from 'react'
import { LoginAndRegisterPanelsProps } from '../../interfaces/loginAndRegisterInterfaces'
import LoginAndRegisterField from './LoginAndRegisterField'

const Register:React.FC<LoginAndRegisterPanelsProps> = ({setSelectedPanel}) => {
    return (
        <div className='register loginAndRegister-panels'>
            <LoginAndRegisterField textDescription='Username' fieldType='text' placeHolderValue='Type a username'/>
            <LoginAndRegisterField textDescription='Mail address' fieldType='text' placeHolderValue='Type a mail address'/>
            <LoginAndRegisterField textDescription='Password' fieldType='password' placeHolderValue='Type a password'/>
            <LoginAndRegisterField textDescription='Password verification' fieldType='password' placeHolderValue='Type the password a 2nd time'/>
        </div>
    )
}

export default Register