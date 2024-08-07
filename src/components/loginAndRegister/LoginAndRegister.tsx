import React, { useState } from 'react'
// import ButtonWithIcon from '../buttons/ButtonWithIcon'
import LoginAndRegisterButton from './LoginAndRegisterButton'
import Login from './Login'
import Register from './Register'
import AskPanel from './AskPanel'
import { ScreenProps } from '../../interfaces/interfaces'
// import { LoginAndRegisterFieldProps, LoginAndRegisterProps } from '../../interfaces/loginAndRegisterInterfaces'
import { DatasInterfaces, UserBaseInformations } from '../../interfaces/datasInterfaces'
import { AppProps } from '../../App'

export interface LoginAndRegisterProps{
    setCurrentPage: AppProps['setCurrentPage']
}

// interface for AskPanel, Login and Register components
export interface LoginAndRegisterPanelsProps {
    setSelectedPanel:React.Dispatch<React.SetStateAction<'register'|'login'|'ask'>>
    fieldsValues?:Partial<UserBaseInformations | null>
    setFieldsValues?:React.Dispatch<React.SetStateAction<Partial<UserBaseInformations | null>>>
    screenFormat?: ScreenProps['screenFormat']
}

const LoginAndRegister:React.FC<ScreenProps & LoginAndRegisterProps> = ({screenFormat, setCurrentPage}) => {

    // following the state for the choice between login and register
    // const [haveAnAccount, setHaveAnAccount] = useState<true | false | null>(null)

    // following the state of the current panel to be shown between the register, login and ask
    const [selectedPanel, setSelectedPanel] = useState<'register'|'login'|'ask'>('ask')

    // 10/03/24 : state to get the values from Register or Login and pass it to LoginAndRegisterButton
    const [fieldsValues, setFieldsValues] = useState<Partial<UserBaseInformations | null>>(null)

    return (
        <div 
            className={`loginAndRegister ${screenFormat === 'mobile' ? 'loginAndRegister-mobile' : ''}`}
        >
            {selectedPanel === 'ask' && <AskPanel setSelectedPanel={setSelectedPanel}/>}
            {selectedPanel === 'login' && <Login setSelectedPanel={setSelectedPanel} setFieldsValues={setFieldsValues}/>}
            {selectedPanel ==='register' && <Register setSelectedPanel={setSelectedPanel} setFieldsValues={setFieldsValues}/>}
            
            {selectedPanel !== 'ask' && 
                <div className="loginAndRegister-buttons">

                    <LoginAndRegisterButton buttonText='return' setSelectedPanel={setSelectedPanel}/>
                    <LoginAndRegisterButton buttonText='enter' setCurrentPage={setCurrentPage} fieldsValues={fieldsValues}/>

                    {selectedPanel === 'login' && <LoginAndRegisterButton buttonText='login' setCurrentPage={setCurrentPage} fieldsValues={fieldsValues} />}                
                    {selectedPanel === 'register' && <LoginAndRegisterButton buttonText='register' setCurrentPage={setCurrentPage} fieldsValues={fieldsValues} />}

                </div>
            }
        </div>
    )
}

export default LoginAndRegister