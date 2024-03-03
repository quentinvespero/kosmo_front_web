import React from 'react'
import { LoginAndRegisterPanelsProps } from '../../interfaces/loginAndRegisterInterfaces'
import LoginAndRegisterField from './LoginAndRegisterField'

const Register:React.FC<LoginAndRegisterPanelsProps> = ({setSelectedPanel}) => {
    return (
        <div className='register loginAndRegister-panels'>
            <h3>Let's create an account then</h3>
            <LoginAndRegisterField textDescription='Username' fieldType='text' placeHolderValue='Type a username'/>
            <LoginAndRegisterField textDescription='Mail address' fieldType='text' placeHolderValue='Type a mail address'/>
            <LoginAndRegisterField textDescription='Password' fieldType='password' placeHolderValue='Type a password'/>
            <LoginAndRegisterField textDescription='Password verification' fieldType='password' placeHolderValue='Type the password a 2nd time'/>
            <LoginAndRegisterField textDescription='How old are you ?' fieldType='date' placeHolderValue='' />
        </div>
    )
}

export default Register