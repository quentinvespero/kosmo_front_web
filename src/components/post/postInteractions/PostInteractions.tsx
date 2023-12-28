import React from 'react'
import CommentElements from './CommentElements'
import UpDownVoteElements from './UpDownVoteElements'
import { ScreenProps } from '../../../interfaces/interfaces'

const PostInteractions:React.FC<ScreenProps> = ({screenFormat}) => {

    // defining the "shape" of interactionChoice, explicitely indicating that it will have the string value upvote, downvote or none. And that by default, it takes the value 'none'
    const [interactionChoice, setInteractionChoice] = React.useState<'upvote' | 'downvote' | 'none'>('none')

    // state of the counters. If they are hidden or showing up
    const [isCountersVisible, setIsCountersVisible] = React.useState(false)

    return (
        <div className='postInteractions' 
            style={{
                columnGap: isCountersVisible ? '1rem' : '3rem'
            }}
        >
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
            <CommentElements isCountersVisible={isCountersVisible} screenFormat={screenFormat}/>
        </div>
    )
}

export default PostInteractions