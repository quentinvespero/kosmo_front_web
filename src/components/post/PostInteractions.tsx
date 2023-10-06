import React from 'react'
import UpDownVoteButton from './UpDownVoteButton'
import CommentButton from './CommentButton'
import Counter from './Counter'

const PostInteractions = () => {
    return (
        <div className='postInteractions'>
            <div className="upvoteButton">
                <UpDownVoteButton/>
                <Counter/>
            </div>
            <div className="downvoteButton">
                <UpDownVoteButton/>
                <Counter/>
            </div>
            <CommentButton/>
        </div>
    )
}

export default PostInteractions