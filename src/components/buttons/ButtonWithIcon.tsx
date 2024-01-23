import React from 'react'
import { ButtonWithIconProps } from '../../interfaces/buttonsInterfaces'

const ButtonWithIcon:React.FC<ButtonWithIconProps> = ({buttonTextAndIcon}) => {
    return (
        <div className='buttonWithIcon'>
            <img 
                src={`
                    ${buttonTextAndIcon === 'bookmarks' && './src/assets/icons'}
                    ${buttonTextAndIcon === 'manage feeds' && './src/assets/icons'}
                    ${buttonTextAndIcon === 'settings' && './src/assets/icons'}
                `} 
                alt={`${buttonTextAndIcon} image`} 
            />
            <p>{buttonTextAndIcon}</p>
        </div>
    )
}

export default ButtonWithIcon