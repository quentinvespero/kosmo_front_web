import React from 'react'

const AddPostText = () => {
    return (
        <div className='addPostText'>
            <textarea
                className='addPost-text'
                name="test"
                // cols={20}  
                placeholder='express yourself here..'
                // value={postText}
                maxLength={500}
            ></textarea>
        </div>
    )
}

export default AddPostText