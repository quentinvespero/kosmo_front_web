import React from 'react'
import UpDownVoteButton from './UpDownVoteButton'
import Counter from './Counter'

const DownvoteButton = () => {
    return (
        <div className="downvoteButton">
            <UpDownVoteButton/>
            <Counter/>
        </div>
    )
}

export default DownvoteButton