import React from 'react'
import AddPostPanelMedia from './AddPostPanelMedia'
import AddPostPanelPoll from './AddPostPanelPoll'
import AddPostPanelText from './AddPostPanelText'
import { AddPostPanelInnerSectionProps } from '../../../../interfaces/addPostPanelInterfaces'
import AddPostPanelDraft from './AddPostPanelDraft'
import { delayHidingElementDisplayProperty } from '../../../../functions/delayedToggle'

const AddPostPanelInnerSection:React.FC<AddPostPanelInnerSectionProps> = ({addPostPanelSelectedInnerSection, setAddPostPanelSelectedInnerSection}) => {
    
    const isDraftTrue = addPostPanelSelectedInnerSection === 'draft'

    return (
        <div className='addPostPanelInnerSection'>
            <div 
                className={`addPostPanelInnerSection-section1 ${!isDraftTrue ? 'addPostPanelInnerSection-open' : 'addPostPanelInnerSection-closed'}`}  
                style={{display: !isDraftTrue ? 'flex' : 'none'}}
            >
                <AddPostPanelText addPostPanelSelectedInnerSection={addPostPanelSelectedInnerSection} />
                <AddPostPanelMedia addPostPanelSelectedInnerSection={addPostPanelSelectedInnerSection} />
                {/* {addPostPanelSelectedInnerSection === 'poll' && <AddPostPanelPoll addPostPanelSelectedInnerSection={addPostPanelSelectedInnerSection} />} */}
            </div>
            <div 
                className={`addPostPanelInnerSection-section2 ${isDraftTrue ? 'addPostPanelInnerSection-open' : 'addPostPanelInnerSection-closed'}`} 
                // style={{display: displayPropertySection2}}
                style={{display: isDraftTrue ? 'flex' : 'none'}}
            >
                <AddPostPanelDraft addPostPanelSelectedInnerSection={addPostPanelSelectedInnerSection} />
            </div>
        </div>
    )
}

export default AddPostPanelInnerSection