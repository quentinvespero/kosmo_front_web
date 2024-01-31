import React from 'react'
import AddPostMedia from './AddPostMedia'
import AddPostPoll from './AddPostPoll'
import AddPostText from './AddPostText'
import { AddPostInnerSectionProps } from '../../../../interfaces/addPostInterfaces'
import AddPostDraft from './AddPostDraft'

const AddPostInnerSection:React.FC<AddPostInnerSectionProps> = ({addPostSelectedInnerSection, setAddPostSelectedInnerSection}) => {
    return (
        <div className='addPostInnerSection'>
            {addPostSelectedInnerSection !== 'draft' && <AddPostText addPostSelectedInnerSection={addPostSelectedInnerSection} />}
            <div className="addPostInnerSection-elements">
                {addPostSelectedInnerSection === 'draft' && <AddPostDraft addPostSelectedInnerSection={addPostSelectedInnerSection} />}
                {addPostSelectedInnerSection === 'media' && <AddPostMedia addPostSelectedInnerSection={addPostSelectedInnerSection} />}
                {addPostSelectedInnerSection === 'poll' && <AddPostPoll addPostSelectedInnerSection={addPostSelectedInnerSection} />}
            </div>
        </div>
    )
}

export default AddPostInnerSection