import React from 'react'
import PostThemeElements from './PostThemeElements'
import PostContent from './PostContent'
import PostInteractions from './postInteractions/PostInteractions'

const Post = () => {
    return (
        <div className='post'>
            <div className="innerPost">
                <PostThemeElements/>
                <PostContent/>
            </div>
            <PostInteractions/>
        </div>
    )
}

export default Post