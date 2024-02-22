import React from 'react'
import { LoginAndRegisterButtonProps } from '../../interfaces/loginAndRegisterInterfaces'
import ButtonWithIcon from '../buttons/ButtonWithIcon'

const LoginAndRegisterButton:React.FC<LoginAndRegisterButtonProps> = ({buttonText, setHaveAnAccount}) => {

    const handleClick = () => {
        setHaveAnAccount && setHaveAnAccount(buttonText.includes('yes') ? true : false)
        if (buttonText.includes('Enter')) {
            console.log('clicked on enter --> submitting login')
        }
    }

    return (
        <div 
            className={`loginAndRegisterButton 
                ${buttonText.includes('yes') ? 'loginAndRegisterButton-choice loginAndRegisterButton-yes' : ''}
                ${buttonText.includes('no') ? 'loginAndRegisterButton-choice loginAndRegisterButton-no' : ''}
                ${buttonText.includes('Enter') ? 'loginAndRegisterButton-enter' : ''}
            `}
            onClick={handleClick}
        >
            <ButtonWithIcon buttonText={buttonText}/>
        </div>
    )
}

export default LoginAndRegisterButton