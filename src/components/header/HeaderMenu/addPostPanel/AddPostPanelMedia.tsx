import React from 'react'
import { AddPostPanelInnerSectionProps } from '../../../../interfaces/addPostPanelInterfaces'
import { delayHidingElementDisplayProperty } from '../../../../functions/delayedToggle'

const AddPostPanelMedia:React.FC<AddPostPanelInnerSectionProps> = ({addPostPanelSelectedInnerSection}) => {

    const displayProperty = delayHidingElementDisplayProperty(addPostPanelSelectedInnerSection === 'media', 200)

    return (
        <div 
            className={`addPostPanelMedia ${addPostPanelSelectedInnerSection === 'media' ? 'addPostPanelMedia-open' : 'addPostPanelMedia-closed'}`}
            style={{display: displayProperty}}
        >
            <div className="addPostPanelMedia-closeButton">test</div>
            <p>{'Drop a file here, or click to import a file ;)'}</p>
        </div>
    )
}

export default AddPostPanelMedia