import React from 'react'
// import { LoginAndRegisterPanelsProps } from '../../interfaces/loginAndRegisterInterfaces'
import LoginAndRegisterButton from './LoginAndRegisterButton'
import { LoginAndRegisterPanelsProps } from './LoginAndRegister'

const AskPanel:React.FC<LoginAndRegisterPanelsProps> = ({setSelectedPanel}) => {
    return (
        <div className='askPanel'>
            <h2>Do you have an account on here ?</h2>
            <div className="loginAndRegister-choices">
                <LoginAndRegisterButton buttonText='yes' setSelectedPanel={setSelectedPanel}/>
                <LoginAndRegisterButton buttonText='no' setSelectedPanel={setSelectedPanel}/>
            </div>
        </div>
    )
}

export default AskPanel