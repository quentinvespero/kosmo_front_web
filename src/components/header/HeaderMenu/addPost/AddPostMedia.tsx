import React from 'react'
import { AddPostInnerSectionProps } from '../../../../interfaces/addPostInterfaces'
import { delayHidingElementDisplayProperty } from '../../../../functions/delayedToggle'

const AddPostMedia:React.FC<AddPostInnerSectionProps> = ({addPostSelectedInnerSection}) => {

    const displayProperty = delayHidingElementDisplayProperty(addPostSelectedInnerSection === 'media', 200)

    return (
        <div 
            className={`addPostMedia ${addPostSelectedInnerSection === 'media' ? 'addPostMedia-open' : 'addPostMedia-closed'}`}
            style={{display: displayProperty}}
        >
            <p>{'Drop a file here, or click to import a file ;)'}</p>
        </div>
    )
}

export default AddPostMedia