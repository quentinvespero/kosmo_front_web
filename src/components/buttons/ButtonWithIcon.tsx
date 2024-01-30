import React from 'react'
import { ButtonWithIconProps } from '../../interfaces/buttonsInterfaces'

const ButtonWithIcon:React.FC<ButtonWithIconProps> = ({buttonIcon, buttonText}) => {

    // explanation buttonText : buttonText string have to be in this format locationOfTheButton-purposeOfTheButton
    // - locationOfTheButton will then be used to give the button a personalised class
    // - purposeOfTheButton will be used for the text of the button

    // splitting the value of buttonText props
    const splitButtonText = buttonText.split('-')

    // Text of the button, with a regex to replace the "_" with spaces
    let textWithoutUnderscores = ''
    
    // Location of the button
    let buttonLocation = ''

    if (splitButtonText.length === 1) {
        console.log('No hyphen "-" found in buttonText')

        // using the whole text of buttonText anyway
        textWithoutUnderscores = buttonText
    }
    else {
        textWithoutUnderscores = splitButtonText[1].replace(/_/g, ' ')
    
        buttonLocation = splitButtonText[0]
    }

    return (
        <div className={`buttonWithIcon buttonWithIcon-${buttonLocation}`}>
            <img
                src={`./src/assets/icons/${buttonIcon}.svg`}
                alt={`${textWithoutUnderscores} image`} 
            />
            <p>{textWithoutUnderscores}</p>
        </div>
    )
}

export default ButtonWithIcon