import React from 'react'
import LoginAndRegisterButton from './LoginAndRegisterButton'
import ButtonWithIcon from '../buttons/ButtonWithIcon'

const Login = () => {
    return (
        <div className='login'>
            <div className="login-content">
                <div className="login-fields login-mail">
                    <p>Mail address</p>
                    <input type="text" placeholder='Type your mail address'/>
                </div>
                <div className="login-fields login-password">
                    <p>Password</p>
                    <input type='password' placeholder='Type your password'/>
                </div>
                <div className="login-forgottenPassword">
                    {/* <p>password forgotten</p> */}
                    <ButtonWithIcon buttonText='forgottenPassword-Password_forgotten' buttonIcon='reset_password_white2'/>
                </div>
            </div>
            <div className="login-buttons">
                <LoginAndRegisterButton buttonText='Enter'/>
            </div>
        </div>
    )
}

export default Login