import React from 'react'
import { AddPostPanelButtonProps } from '../../../../interfaces/addPostPanelInterfaces'
import ButtonWithIcon from '../../../buttons/ButtonWithIcon'

const AddPostPanelButton:React.FC<AddPostPanelButtonProps> = ({buttonIcon, buttonText ,setAddPostPanelSelectedInnerSection, buttonPurpose}) => {

    const handleClick = () => {
        if (setAddPostPanelSelectedInnerSection) {
            setAddPostPanelSelectedInnerSection(buttonPurpose)
            // console.log(buttonPurpose)
        }
    }

    return (
        <div 
            className={`addPostPanelButton addPostPanelButton-${buttonPurpose}`}
            onClick={handleClick}
        >
            <ButtonWithIcon buttonIcon={buttonIcon} buttonText={buttonText}/>
        </div>
    )
}

export default AddPostPanelButton