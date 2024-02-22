import React from 'react'
import { LoginAndRegisterAskPanelProps } from '../../interfaces/loginAndRegisterInterfaces'
import LoginAndRegisterButton from './LoginAndRegisterButton'

const AskPanel:React.FC<LoginAndRegisterAskPanelProps> = ({setHaveAnAccount}) => {
    return (
        <div className='askPanel'>
            <h2>Do you own an account on here ?</h2>
            <div className="loginAndRegister-choices">
                <LoginAndRegisterButton buttonText='loginAndRegisterButton-yes' setHaveAnAccount={setHaveAnAccount}/>
                <LoginAndRegisterButton buttonText='loginAndRegisterButton-no' setHaveAnAccount={setHaveAnAccount}/>
            </div>
        </div>
    )
}

export default AskPanel