import React from 'react'
// import { LoginAndRegisterButtonProps } from '../../interfaces/loginAndRegisterInterfaces'
import ButtonWithIcon from '../buttons/ButtonWithIcon'
import { createUser } from '../../utils/api/UserFetches'
import { useAuth } from '../../utils/api/authentification/useAuth'
import { UserBaseInformations } from '../../interfaces/datasInterfaces'
import { LoginAndRegisterPanelsProps, LoginAndRegisterProps } from './LoginAndRegister'
import { AppProps } from '../../App'

export interface LoginAndRegisterButtonProps{
    buttonText: 'enter' | 'return' | 'yes' | 'no' | 'register' | 'login'
    setSelectedPanel?:LoginAndRegisterPanelsProps['setSelectedPanel']
    setCurrentPage?: AppProps['setCurrentPage']
    fieldsValues?:LoginAndRegisterPanelsProps['fieldsValues']
}

const LoginAndRegisterButton:React.FC<LoginAndRegisterButtonProps> = ({buttonText, setSelectedPanel, setCurrentPage, fieldsValues}) => {

    // get the register function with the "{}", from useAuth hook
    const {register} = useAuth()

    // list actions for each button based on buttonText
    const buttonActions = {
        'yes': () => setSelectedPanel && setSelectedPanel('login'),
        'no': () => setSelectedPanel && setSelectedPanel('register'),
        'enter': () => setCurrentPage && setCurrentPage('home'),
        'return': () => setSelectedPanel && setSelectedPanel('ask'),
        'register': async () => {
            if (fieldsValues) {
                try {
                    console.log('la value de fieldsValues ✌🏻: ',fieldsValues)
                    await register(fieldsValues as UserBaseInformations)
                    console.log('Registration successful')
                    setCurrentPage && setCurrentPage('home')
                }
                catch (error) {
                    console.error('Registration error:', error)
                }
            }
            else {
                console.error('Registration error: missing fields')
            }
        },
        'login': () => console.log('login')
    }

    // list class mappings for each button based on buttonText
    const buttonClassMappings = {
        'yes': 'loginAndRegisterButton-choice loginAndRegisterButton-yes',
        'no': 'loginAndRegisterButton-choice loginAndRegisterButton-no',
        'enter': 'loginAndRegisterButton-enter',
        'return': 'loginAndRegisterButton-return',
        'register': 'loginAndRegisterButton-register',
        'login': 'loginAndRegisterButton-login'
    }

    // handle button click and execute the corresponding action based on buttonaActions and buttonText
    const handleClick = () => {
        const action = buttonActions[buttonText]
        if (action) action()
    }

    // get class names for the button based on buttonClassMapping and buttonText
    const getClassName = () => {
        
        let className = 'loginAndRegisterButton'
        
        // defining a type for the keys of buttonClassMappings
        type buttonClassKey = 'yes' | 'no' | 'enter' | 'return' | 'login' | 'register'
        
        // getting the array of keys from buttonClassMappings and checking if the buttonText includes any of the keys
        // (we use Object.keys because forEach and includes method need arrays. (Object.keys returns an array of keys from an object))
        Object.keys(buttonClassMappings).forEach(key => {
            
            // we use 'as' to cast the key to buttonClassKey type
            const keyWithType = key as buttonClassKey

            // if (buttonText.includes(keyWithType) || selectedPanel === keyWithType) {
            if (buttonText.includes(keyWithType)) {
                
                // adding the class name from buttonClassMappings to the className variable
                className += ` ${buttonClassMappings[keyWithType]}`
            }
        })
        // returning the className variable
        return className
    }

    // here is a breakdown of how the ternary operator below works:
    // if buttonText is 'enter', return a ButtonWithIcon component with buttonText 'Bypass signing in 👀'
    // if buttonText is 'return', return a ButtonWithIcon component with buttonText 'return' and buttonIcon 'return_grey4'
    // if buttonText is neither 'enter' nor 'return', return a ButtonWithIcon component with buttonText equal to buttonText
    return (
        <div className={getClassName()} onClick={handleClick}>
            
            {buttonText === 'enter' ? (
                <ButtonWithIcon buttonText='Bypass signing in 👀'/>
            ) 
            : (buttonText === 'return') ? (
                <ButtonWithIcon buttonText={buttonText} buttonIcon='return_grey4'/>
                ) : (
                <ButtonWithIcon buttonText={buttonText}/>
            )}

        </div>
    )
}

export default LoginAndRegisterButton