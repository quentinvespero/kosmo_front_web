import React from 'react'
import AddPostMedia from './AddPostMedia'
import AddPostPoll from './AddPostPoll'
import AddPostText from './AddPostText'
import { AddPostInnerSectionProps } from '../../../../interfaces/addPostInterfaces'
import AddPostDraft from './AddPostDraft'
import { delayHidingElementDisplayProperty } from '../../../../functions/delayedToggle'

const AddPostInnerSection:React.FC<AddPostInnerSectionProps> = ({addPostSelectedInnerSection, setAddPostSelectedInnerSection}) => {
    
    const isDraftTrue = addPostSelectedInnerSection === 'draft'

    const displayPropertySection1 = delayHidingElementDisplayProperty(!isDraftTrue, 0)
    const displayPropertySection2 = delayHidingElementDisplayProperty(isDraftTrue, 0)


    return (
        <div className='addPostInnerSection'>
            <div 
                className={`addPostInnerSection-section1 ${!isDraftTrue ? 'addPostInnerSection-open' : 'addPostInnerSection-closed'}`}  
                style={{display: !isDraftTrue ? 'flex' : 'none'}}
            >
                <AddPostText addPostSelectedInnerSection={addPostSelectedInnerSection} />
                <AddPostMedia addPostSelectedInnerSection={addPostSelectedInnerSection} />
                {addPostSelectedInnerSection === 'poll' && <AddPostPoll addPostSelectedInnerSection={addPostSelectedInnerSection} />}
            </div>
            <div 
                className={`addPostInnerSection-section2 ${isDraftTrue ? 'addPostInnerSection-open' : 'addPostInnerSection-closed'}`} 
                // style={{display: displayPropertySection2}}
                style={{display: isDraftTrue ? 'flex' : 'none'}}
            >
                <AddPostDraft addPostSelectedInnerSection={addPostSelectedInnerSection} />
            </div>
        </div>
    )
}

export default AddPostInnerSection