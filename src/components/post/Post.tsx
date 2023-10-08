import React from 'react'
import PostThemeElements from './PostThemeElements'
import PostContent from './PostContent'
import PostInteractions from './postInteractions/PostInteractions'

const Post = () => {
    return (
        <div className='post'>
            <PostThemeElements/>
            <PostContent/>
            <PostInteractions/>
        </div>
    )
}

export default Post