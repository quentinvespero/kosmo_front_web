import React from 'react'
import CommentElements from './CommentElements'
import UpDownVoteElements from './UpDownVoteElements'

const PostInteractions = () => {
    return (
        <div className='postInteractions'>
            <UpDownVoteElements interactionType='upvote'/>
            <UpDownVoteElements interactionType='downvote'/>
            <CommentElements/>
        </div>
    )
}

export default PostInteractions