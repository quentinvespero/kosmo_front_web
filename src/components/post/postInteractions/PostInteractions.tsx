import React from 'react'
import CommentElements from './CommentElements'
import UpDownVoteElements from './UpDownVoteElements'

const PostInteractions = () => {

    // defining the "shape" of interactionChoice, explicitely indicating that it will have the string value upvote, downvote or none. And that by default, it takes the value 'none'
    const [interactionChoice, setInteractionChoice] = React.useState<'upvote' | 'downvote' | 'none'>('none')

    return (
        <div className='postInteractions'>
            <UpDownVoteElements interactionType='upvote' setInteractionChoice={setInteractionChoice} interactionChoice={interactionChoice}/>
            <UpDownVoteElements interactionType='downvote' setInteractionChoice={setInteractionChoice} interactionChoice={interactionChoice}/>
            <CommentElements/>
        </div>
    )
}

export default PostInteractions