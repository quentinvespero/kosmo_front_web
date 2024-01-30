import React from 'react'
import ButtonWithIcon from '../../buttons/ButtonWithIcon'

const AddPost = () => {
    return (
        <div className='addPost'>
            <div className="addPost-elements">
                <ButtonWithIcon buttonIcon='icon_photo_white2' buttonText='addPostSection-photo'/>
                <ButtonWithIcon buttonIcon='icon_video_white2' buttonText='addPostSection-video'/>
                <ButtonWithIcon buttonIcon='icon_poll_white2' buttonText='addPostSection-poll'/>
            </div>
            <textarea 
                name="test" 
                // cols={20}  
                placeholder='express yourself here..' 
                // value={postText}
                maxLength={500}
            ></textarea>

        </div>
    )
}

export default AddPost