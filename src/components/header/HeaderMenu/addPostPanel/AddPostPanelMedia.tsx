import React from 'react'
import { AddPostPanelInnerSectionProps } from '../../../../interfaces/addPostPanelInterfaces'
import { delayHidingElementDisplayProperty } from '../../../../functions/delayedToggle'
import ButtonWithIcon from '../../../buttons/ButtonWithIcon'
import AddPostPanelButton from './AddPostPanelButton'

const AddPostPanelMedia:React.FC<AddPostPanelInnerSectionProps> = ({addPostPanelSelectedInnerSection, setAddPostPanelSelectedInnerSection}) => {

    const displayProperty = delayHidingElementDisplayProperty(addPostPanelSelectedInnerSection === 'media', 200)

    const handleClick = () => {
        setAddPostPanelSelectedInnerSection && setAddPostPanelSelectedInnerSection('textOnly')
    }

    return (
        <div 
            className={`addPostPanelMedia ${addPostPanelSelectedInnerSection === 'media' ? 'addPostPanelMedia-open' : 'addPostPanelMedia-closed'}`}
            style={{display: displayProperty}}
        >
            {/* <div className="addPostPanelMedia-closeButton" onClick={handleClick}>
                <ButtonWithIcon buttonText='' buttonIcon='icon_close_white2'/>
            </div> */}
            <AddPostPanelButton 
                buttonIcon='icon_close_white2' 
                buttonText='addPostPanelSectionButton-close' 
                buttonPurpose='textOnly' 
                setAddPostPanelSelectedInnerSection={setAddPostPanelSelectedInnerSection}
            />
            <p>{'Drop a file here, or click to import a file ;)'}</p>
        </div>
    )
}

export default AddPostPanelMedia