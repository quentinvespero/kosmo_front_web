import React from 'react'
import { ButtonWithIconProps } from '../../interfaces/buttonsInterfaces'

const ButtonWithIcon:React.FC<ButtonWithIconProps> = ({buttonIcon, buttonText}) => {

    // variable used to replace the "_" with actual spaces
    const textWithoutUnderscores = buttonText.replace(/_/g, ' ')

    return (
        // <div className='buttonWithIcon'>
        <div className={`buttonWithIcon buttonWithIcon-${buttonText}`}>
            <img
                src={`./src/assets/icons/${buttonIcon}.svg`}
                alt={`${buttonText} image`} 
            />
            <p>{textWithoutUnderscores}</p>
        </div>
    )
}

export default ButtonWithIcon