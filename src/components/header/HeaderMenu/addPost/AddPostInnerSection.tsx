import React from 'react'
import DraftSection from '../DraftSection'
import AddPostMedia from './AddPostMedia'
import AddPostPoll from './AddPostPoll'
import AddPostText from './AddPostText'

const AddPostInnerSection = () => {
    return (
        <div className='addPostInnerSection'>
            {/* <DraftSection />
            <AddPostMedia/>
            <AddPostPoll/> */}
            <AddPostText/>
        </div>
    )
}

export default AddPostInnerSection