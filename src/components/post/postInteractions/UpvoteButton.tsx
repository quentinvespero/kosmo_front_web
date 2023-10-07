import React from 'react'
import UpDownVoteButton from './UpDownVoteButton'
import Counter from './Counter'

const UpvoteButton = () => {
    return (
        <div className="upvoteButton">
            <UpDownVoteButton/>
            <Counter/>
        </div>
    )
}

export default UpvoteButton