import React from 'react'
import CommentButton from './CommentButton'
import UpDownVoteElements from './UpDownVoteElements'

const PostInteractions = () => {
    return (
        <div className='postInteractions'>
            <UpDownVoteElements direction='up'/>
            <UpDownVoteElements direction='down'/>
            <CommentButton/>
        </div>
    )
}

export default PostInteractions