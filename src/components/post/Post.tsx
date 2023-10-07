import React from 'react'
import PostTheme from './PostTheme'
import PostContent from './PostContent'
import PostInteractions from './postInteractions/PostInteractions'

const Post = () => {
    return (
        <div className='post'>
            <PostTheme/>
            <PostContent/>
            <PostInteractions/>
        </div>
    )
}

export default Post