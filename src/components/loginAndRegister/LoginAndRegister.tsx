import React, { useState } from 'react'
import ButtonWithIcon from '../buttons/ButtonWithIcon'
import LoginAndRegisterButton from './LoginAndRegisterButton'
import Login from './Login'
import Register from './Register'
import AskPanel from './AskPanel'
import { ScreenProps } from '../../interfaces/interfaces'
import { LoginAndRegisterProps } from '../../interfaces/loginAndRegisterInterfaces'

const LoginAndRegister:React.FC<ScreenProps & LoginAndRegisterProps> = ({screenFormat, pageSelection}) => {

    // following the state for the choice between login and register
    // const [haveAnAccount, setHaveAnAccount] = useState<true | false | null>(null)

    // following the state of the current panel to be shown between the register, login and ask
    const [selectedPanel, setSelectedPanel] = useState<'register'|'login'|'ask'>('ask')

    return (
        <div className='loginAndRegister'>
            {selectedPanel === 'ask' && <AskPanel setSelectedPanel={setSelectedPanel}/>}
            {selectedPanel === 'login' && <Login setSelectedPanel={setSelectedPanel}/>}
            {selectedPanel ==='register' && <Register setSelectedPanel={setSelectedPanel}/>}
            {selectedPanel !== 'ask' && <div className="loginAndRegister-buttons">
                <LoginAndRegisterButton buttonText='return' setSelectedPanel={setSelectedPanel}/>
                <LoginAndRegisterButton buttonText='enter' pageSelection={pageSelection}/>
                {/* <LoginAndRegisterButton buttonText='enter'/> */}
            </div>}
        </div>
    )
}

export default LoginAndRegister