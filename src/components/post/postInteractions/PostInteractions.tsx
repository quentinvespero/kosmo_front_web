import React from 'react'
import CommentElements from './CommentElements'
import UpDownVoteElements from './UpDownVoteElements'

const PostInteractions = () => {

    // const [vote, setVote] = React.useState('none')

    return (
        <div className='postInteractions'>
            <UpDownVoteElements interactionType='upvote'/>
            <UpDownVoteElements interactionType='downvote'/>
            <CommentElements/>
        </div>
    )
}

export default PostInteractions