import React from 'react'
import { LoginAndRegisterButtonProps } from '../../interfaces/loginAndRegisterInterfaces'
import ButtonWithIcon from '../buttons/ButtonWithIcon'

const LoginAndRegisterButton:React.FC<LoginAndRegisterButtonProps> = ({buttonText, setSelectedPanel}) => {

    const handleClick = () => {
        // for yes and no buttons
        if (!buttonText.includes('enter') && !buttonText.includes('return')) {
            // setHaveAnAccount && setHaveAnAccount(buttonText.includes('yes') ? true : false)
            setSelectedPanel && setSelectedPanel(buttonText.includes('yes') ? 'login' : 'register')
        }
        // for enter and return buttons
        else {
            // setHaveAnAccount && setHaveAnAccount(buttonText.includes('return') && null)
            if (buttonText.includes('return')) {
                // setHaveAnAccount && setHaveAnAccount(null)
                setSelectedPanel && setSelectedPanel('ask')
            }
        }
    }

    return (
        <div 
            className={`loginAndRegisterButton 
                ${buttonText.includes('yes') ? 'loginAndRegisterButton-choice loginAndRegisterButton-yes' : ''}
                ${buttonText.includes('no') ? 'loginAndRegisterButton-choice loginAndRegisterButton-no' : ''}
                ${buttonText.includes('enter') ? 'loginAndRegisterButton-enter' : ''}
                ${buttonText.includes('return') ? 'loginAndRegisterButton-return' : ''}
            `}
            onClick={handleClick}
        >
            <ButtonWithIcon buttonText={buttonText} buttonIcon={buttonText.includes('return') ? 'return_grey4' : ''}/>
        </div>
    )
}

export default LoginAndRegisterButton