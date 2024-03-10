import React from 'react'
import LoginAndRegisterButton from './LoginAndRegisterButton'
import ButtonWithIcon from '../buttons/ButtonWithIcon'
import { LoginAndRegisterPanelsProps } from '../../interfaces/loginAndRegisterInterfaces'
import LoginAndRegisterField from './LoginAndRegisterField'

const Login:React.FC<LoginAndRegisterPanelsProps> = ({setSelectedPanel, setFieldsValues}) => {
    return (
        <div className='login loginAndRegister-panels'>
            <h3>Let's connect you up</h3>
            <LoginAndRegisterField textDescription='Mail address' fieldType='text' placeHolderValue='Type your mail address' setFieldsValues={setFieldsValues}/>
            <LoginAndRegisterField textDescription='Password' fieldType='password' placeHolderValue='Type your password' setFieldsValues={setFieldsValues}/>
            <div className="login-forgottenPassword">
                <ButtonWithIcon buttonText='forgottenPassword-Password_forgotten' buttonIcon='reset_password_white2'/>
            </div>
        </div>
    )
}

export default Login