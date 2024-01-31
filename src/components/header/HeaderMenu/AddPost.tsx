import React, { useState } from 'react'
import ButtonWithIcon from '../../buttons/ButtonWithIcon'
import DraftSection from './DraftSection'
import AddPostInnerSection from './addPost/AddPostInnerSection'

const AddPost = () => {

    const [addPostSelectedSection, setAddPostSelectedSection] = useState<'photo'|'video'|'text'|'poll'|'draft'>('text')

    const textMaxLength = 500

    return (
        <div className='addPost'>
            {/* <div className="addPost-addMediaButtons">
                <ButtonWithIcon buttonIcon='icon_photo_white2' buttonText='addPostSectionButton-photo'/>
                <ButtonWithIcon buttonIcon='icon_video_white2' buttonText='addPostSectionButton-video'/>
                <ButtonWithIcon buttonIcon='icon_poll_white2' buttonText='addPostSectionButton-poll'/>
            </div>
            <div className="addPost-elements">
                <textarea 
                    name="test" 
                    // cols={20}  
                    placeholder='express yourself here..' 
                    // value={postText}
                    maxLength={500}
                ></textarea>
                <DraftSection/>
                <div className="addPost-elements-buttons">
                    <ButtonWithIcon buttonIcon='icon_drafts_white2' buttonText='addPostSectionBottomDraft-drafts'/>
                    <ButtonWithIcon buttonIcon='icon_arrow3_white2' buttonText='addPostSectionBottomPost-Post'/>
                </div>
            </div> */}
            <div className="addPost-section1">
                <div className="addPost-mediaButtons">
                    <ButtonWithIcon buttonIcon='icon_photo_white2' buttonText='addPostSectionButton-photo'/>
                    <ButtonWithIcon buttonIcon='icon_video_white2' buttonText='addPostSectionButton-video'/>
                    <ButtonWithIcon buttonIcon='icon_poll_white2' buttonText='addPostSectionButton-poll'/>
                </div>
                <AddPostInnerSection/>
            </div>
            <div className="addPost-section2">
                <div className="addPost-elements-buttons">
                    <ButtonWithIcon buttonIcon='icon_drafts_white2' buttonText='addPostSectionBottomDraft-drafts'/>
                    <ButtonWithIcon buttonIcon='icon_arrow3_white2' buttonText='addPostSectionBottomPost-Post'/>
                </div>
            </div>
        </div>
    )
}

export default AddPost