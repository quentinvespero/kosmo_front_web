import React from 'react'
import { ButtonWithIconProps } from '../../interfaces/buttonsInterfaces'

// ########## buttonText props ##########
// format : "classNameOfTheButton-textInsideTheButton"
// "buttonWithIcon" is added at the beginning of the class, as such : "buttonWithIcon-classNameOfTheButton"
// - classNameOfTheButton will then be used to give the button a personalised class. 
// - textInsideTheButton" will be used for the text of the button (the "_" will be replaced by a space)

// ########## className props ##########
// className props is optional, if buttonLocation is not given
// it will give a class to the button, as such : "buttonWithIcon-className"

const ButtonWithIcon:React.FC<ButtonWithIconProps> = ({buttonIcon, buttonText, className, description}) => {

    // path of the assets
    const assetPath = './assets/icons/'

    // splitting the value of buttonText props
    const splitButtonText = buttonText.split('-')

    // Text of the button, with a regex to replace the "_" with spaces
    let textOfTheButton = ''
    
    // Location of the button
    let buttonLocation = ''

    if (splitButtonText.length === 1) {
        // console.log('No hyphen "-" found in buttonText')

        // using the whole text of buttonText anyway
        textOfTheButton = buttonText
    }
    else {
        textOfTheButton = splitButtonText[1].replace(/_/g, ' ')
        buttonLocation = splitButtonText[0]
    }

    return (
        <div 
            className={`buttonWithIcon buttonWithIcon-${className ? className : buttonLocation}`} 
            title={description ? description : textOfTheButton}
        >
            {buttonIcon && <img
                src={`${assetPath}${buttonIcon}.svg`}
                alt={`${description ? description : textOfTheButton}`}
            />}
            <p>{textOfTheButton}</p>
            
        </div>
    )
}

export default ButtonWithIcon