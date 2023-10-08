import React from 'react'
import CommentButton from './CommentButton'
import UpDownVoteElements from './UpDownVoteElements'

const PostInteractions = () => {
    return (
        <div className='postInteractions'>
            <UpDownVoteElements interactionType='upvote'/>
            <UpDownVoteElements interactionType='downvote'/>
            <CommentButton/>
        </div>
    )
}

export default PostInteractions