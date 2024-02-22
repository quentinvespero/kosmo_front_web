import React, { useState } from 'react'
import ButtonWithIcon from '../buttons/ButtonWithIcon'
import LoginAndRegisterButton from './LoginAndRegisterButton'
import Login from './Login'
import Register from './Register'
import AskPanel from './AskPanel'

const LoginAndRegister = () => {

    // following the state for the choice between login and register
    const [haveAnAccount, setHaveAnAccount] = useState<true | false | null>(null)

    // const handleClick = () => {
    //     console.log()
    //     return 
    // }

    return (
        <div className='loginAndRegister'>
            {haveAnAccount === null && <AskPanel setHaveAnAccount={setHaveAnAccount}/>}
            {haveAnAccount ? <Login/> : <Register/>}
            {/* {!haveAnAccount && <Register/>} */}
        </div>
    )
}

export default LoginAndRegister