import React from 'react'
import LoginAndRegisterButton from './LoginAndRegisterButton'
import ButtonWithIcon from '../buttons/ButtonWithIcon'
import LoginAndRegisterField from './LoginAndRegisterField'
import { handleFieldChange } from './functions'
import { LoginAndRegisterPanelsProps } from './LoginAndRegister'

const Login:React.FC<LoginAndRegisterPanelsProps> = ({setSelectedPanel, setFieldsValues}) => {

    return (
        <div className='login loginAndRegister-panels'>
            
            <h3>Let's connect you up</h3>
            
            <LoginAndRegisterField 
                textDescription='Mail address' 
                fieldType='text' 
                placeHolderValue='Type your mail address' 
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleFieldChange(e, setFieldsValues)} 
                name='mailAddress' 
            />
            
            <LoginAndRegisterField 
                textDescription='Password' 
                fieldType='password' 
                placeHolderValue='Type your password' 
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleFieldChange(e, setFieldsValues)} 
                name='password' 
            />
            
            <div className="login-forgottenPassword">
                <ButtonWithIcon buttonText='forgottenPassword-Password_forgotten' buttonIcon='reset_password_white2'/>
            </div>

        </div>
    )
}

export default Login