import React from 'react'
import ButtonWithIcon from '../../buttons/ButtonWithIcon'

const AddPost = () => {

    const textMaxLength = 500

    return (
        <div className='addPost'>
            <div className="addPost-addMediaButtons">
                <ButtonWithIcon buttonIcon='icon_photo_white2' buttonText='addPostSection-photo'/>
                <ButtonWithIcon buttonIcon='icon_video_white2' buttonText='addPostSection-video'/>
                <ButtonWithIcon buttonIcon='icon_poll_white2' buttonText='addPostSection-poll'/>
            </div>
            <div className="addPost-elements">
                <textarea 
                    name="test" 
                    // cols={20}  
                    placeholder='express yourself here..' 
                    // value={postText}
                    maxLength={500}
                ></textarea>
                <div className="addPost-elements-buttons">
                    <ButtonWithIcon buttonIcon='icon_drafts_white2' buttonText='addPostSectionBottomDraft-drafts'/>
                    <ButtonWithIcon buttonIcon='icon_arrow3_white2' buttonText='addPostSectionBottomPost-Post'/>
                </div>
            </div>

        </div>
    )
}

export default AddPost