import React from 'react'
import { AddPostSectionButtonProps } from '../../interfaces/addPostInterfaces'
import ButtonWithIcon from './ButtonWithIcon'

const AddPostSectionButton:React.FC<AddPostSectionButtonProps> = ({buttonIcon, buttonText, addPostSelectedInnerSection ,setAddPostSelectedInnerSection, buttonPurpose}) => {

    const handleClick = () => {
        if (setAddPostSelectedInnerSection) {
            setAddPostSelectedInnerSection(buttonPurpose)
            console.log(buttonPurpose)
        }
    }

    return (
        <div 
            className='addPostSectionButton'
            onClick={handleClick}
        >
            <ButtonWithIcon buttonIcon={buttonIcon} buttonText={buttonText}/>
        </div>
    )
}

export default AddPostSectionButton