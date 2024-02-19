import React from 'react'
import { ButtonWithIconProps } from '../../interfaces/buttonsInterfaces'

// explanation **buttonText props** : buttonText string have to be in this format "locationOfTheButton-purposeOfTheButton"
// - locationOfTheButton will then be used to give the button a personalised class
// - purposeOfTheButton will be used for the text of the button

const ButtonWithIcon:React.FC<ButtonWithIconProps> = ({buttonIcon, buttonText}) => {


    // splitting the value of buttonText props
    const splitButtonText = buttonText.split('-')

    // Text of the button, with a regex to replace the "_" with spaces
    let textOfTheButton = ''
    
    // Location of the button
    let buttonLocation = ''

    if (splitButtonText.length === 1) {
        console.log('No hyphen "-" found in buttonText')

        // using the whole text of buttonText anyway
        textOfTheButton = buttonText
    }
    else {
        textOfTheButton = splitButtonText[1].replace(/_/g, ' ')
    
        buttonLocation = splitButtonText[0]
    }

    return (
        <div className={`buttonWithIcon buttonWithIcon-${buttonLocation}`} title={textOfTheButton}>
            <img
                src={`./src/assets/icons/${buttonIcon}.svg`}
                alt={`${textOfTheButton} image`} 
            />
            <p>{textOfTheButton}</p>
        </div>
    )
}

export default ButtonWithIcon