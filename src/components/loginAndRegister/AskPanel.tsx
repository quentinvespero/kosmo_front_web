import React from 'react'
import { LoginAndRegisterPanelsProps } from '../../interfaces/loginAndRegisterInterfaces'
import LoginAndRegisterButton from './LoginAndRegisterButton'

const AskPanel:React.FC<LoginAndRegisterPanelsProps> = ({setSelectedPanel}) => {
    return (
        <div className='askPanel'>
            <h2>Do you own an account on here ?</h2>
            <div className="loginAndRegister-choices">
                <LoginAndRegisterButton buttonText='loginAndRegisterButton-yes' setSelectedPanel={setSelectedPanel}/>
                <LoginAndRegisterButton buttonText='loginAndRegisterButton-no' setSelectedPanel={setSelectedPanel}/>
            </div>
        </div>
    )
}

export default AskPanel