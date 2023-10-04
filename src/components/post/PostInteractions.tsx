import React from 'react'
import UpDownVoteButton from './UpDownVoteButton'
import CommentButton from './CommentButton'

const PostInteractions = () => {
    return (
        <div className='postInteractions'>
            <UpDownVoteButton/>
            <UpDownVoteButton/>
            <CommentButton/>
        </div>
    )
}

export default PostInteractions