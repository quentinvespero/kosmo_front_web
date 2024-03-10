import React, { useState } from 'react'
import ButtonWithIcon from '../buttons/ButtonWithIcon'
import LoginAndRegisterButton from './LoginAndRegisterButton'
import Login from './Login'
import Register from './Register'
import AskPanel from './AskPanel'
import { ScreenProps } from '../../interfaces/interfaces'
import { LoginAndRegisterProps } from '../../interfaces/loginAndRegisterInterfaces'
import { DatasInterfaces } from '../../interfaces/datasInterfaces'

const LoginAndRegister:React.FC<ScreenProps & LoginAndRegisterProps> = ({screenFormat, pageSelection}) => {

    // following the state for the choice between login and register
    // const [haveAnAccount, setHaveAnAccount] = useState<true | false | null>(null)

    // following the state of the current panel to be shown between the register, login and ask
    const [selectedPanel, setSelectedPanel] = useState<'register'|'login'|'ask'>('ask')

    // 10/03/24 : state to get the values from Register or Login and pass it to LoginAndRegisterButton
    const [fieldsValues, setFieldsValues] = useState<DatasInterfaces['users']| null>(null)

    return (
        <div className='loginAndRegister'>
            {selectedPanel === 'ask' && <AskPanel setSelectedPanel={setSelectedPanel}/>}
            {selectedPanel === 'login' && <Login setSelectedPanel={setSelectedPanel} setFieldsValues={setFieldsValues}/>}
            {selectedPanel ==='register' && <Register setSelectedPanel={setSelectedPanel} setFieldsValues={setFieldsValues}/>}
            {selectedPanel !== 'ask' && 
            <div className="loginAndRegister-buttons">
                <LoginAndRegisterButton buttonText='return' setSelectedPanel={setSelectedPanel}/>
                <LoginAndRegisterButton buttonText='enter' pageSelection={pageSelection} selectedPanel={selectedPanel} fieldsValues={fieldsValues}/>
                {/* <LoginAndRegisterButton buttonText='enter'/> */}
            </div>}
        </div>
    )
}

export default LoginAndRegister