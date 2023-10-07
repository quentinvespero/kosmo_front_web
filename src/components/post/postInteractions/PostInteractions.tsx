import React from 'react'
import UpDownVoteButton from './UpDownVoteButton'
import CommentButton from './CommentButton'
import Counter from './Counter'
import UpvoteButton from './UpvoteButton'
import DownvoteButton from './DownvoteButton'

const PostInteractions = () => {
    return (
        <div className='postInteractions'>
            <UpvoteButton/>
            <DownvoteButton/>
            <CommentButton/>
        </div>
    )
}

export default PostInteractions