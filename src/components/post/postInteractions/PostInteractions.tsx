import React from 'react'
import CommentElements from './CommentElements'
import UpDownVoteElements from './UpDownVoteElements'
import { CommentElementsProps } from '../../../interfaces/interfaces'

const PostInteractions:React.FC<CommentElementsProps> = ({mobileLayout}) => {

    // defining the "shape" of interactionChoice, explicitely indicating that it will have the string value upvote, downvote or none. And that by default, it takes the value 'none'
    const [interactionChoice, setInteractionChoice] = React.useState<'upvote' | 'downvote' | 'none'>('none')

    // state of the counters. If they are hidden or showing up
    const [isCountersVisible, setIsCountersVisible] = React.useState(false)

    return (
        <div className='postInteractions'>
            <UpDownVoteElements 
                interactionType='upvote' 
                setInteractionChoice={setInteractionChoice} 
                interactionChoice={interactionChoice} 
                isCountersVisible={isCountersVisible} 
                setIsCountersVisible={setIsCountersVisible}
            />
            <UpDownVoteElements 
                interactionType='downvote' 
                setInteractionChoice={setInteractionChoice} 
                interactionChoice={interactionChoice} 
                isCountersVisible={isCountersVisible} 
                setIsCountersVisible={setIsCountersVisible}
            />
            <CommentElements isCountersVisible={isCountersVisible} mobileLayout={}/>
        </div>
    )
}

export default PostInteractions