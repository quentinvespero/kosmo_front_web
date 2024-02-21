import React from 'react'
import ButtonWithIcon from '../buttons/ButtonWithIcon'

const LoginAndRegister = () => {

    const handleClick = (answer:string) => {
        console.log(answer)
        return answer
    }

    return (
        <div className='loginAndRegister'>
            <h2>Do you own an account on here ?</h2>
            <div className="loginAndRegister-buttons">
                <ButtonWithIcon buttonText='yes' className='loginAndRegisterButton' functionToPass={handleClick}/>
                <ButtonWithIcon buttonText='no' className='loginAndRegisterButton' functionToPass={handleClick}/>
            </div>
            <div className="login">
                <p>user</p>
                <input type="text" />
            </div>
            <div className="password">
                <p>password</p>
                <input type="text" />
            </div>
        </div>
    )
}

export default LoginAndRegister