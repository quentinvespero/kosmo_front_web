import React from 'react'
import CommentElements from './CommentElements'
import UpDownVoteElements from './UpDownVoteElements'
import { ScreenProps } from '../../../interfaces/interfaces'
import { PostInteractionsProps } from '../../../interfaces/postInterfaces'

const PostInteractions:React.FC<ScreenProps & PostInteractionsProps> = ({screenFormat, selectedViewType, postLayout}) => {

    // defining the "shape" of interactionChoice, explicitely indicating that it will have the string value upvote, downvote or none. And that by default, it takes the value 'none'
    const [interactionChoice, setInteractionChoice] = React.useState<'upvote' | 'downvote' | 'none'>('none')

    // state of the counters. If they are hidden or showing up
    const [isCountersVisible, setIsCountersVisible] = React.useState(false)

    // state of the conters appearing/hiddding
    const [isCountersBeingHide, setIsCountersBeingHide] = React.useState(false)

    return (
        <div 
            className={`postInteractions 

                ${postLayout && postLayout === 'compact' ? 'postInteractions-compact' : ''}
                ${postLayout && postLayout === 'regular' ? 'postInteractions-regular' : ''}
                ${postLayout && postLayout === 'detail' ? 'postInteractions-detail postInteractions-compact' : ''}
            `}
            // onClick={(e) => e.stopPropagation()}
        >
            <UpDownVoteElements 
                interactionType='upvote' 
                setInteractionChoice={setInteractionChoice} 
                interactionChoice={interactionChoice} 
                isCountersVisible={isCountersVisible} 
                setIsCountersVisible={setIsCountersVisible}
                isCountersBeingHide={isCountersBeingHide}
                setIsCountersBeingHide={setIsCountersBeingHide}
            />
            <UpDownVoteElements 
                interactionType='downvote' 
                setInteractionChoice={setInteractionChoice} 
                interactionChoice={interactionChoice} 
                isCountersVisible={isCountersVisible} 
                setIsCountersVisible={setIsCountersVisible}
                isCountersBeingHide={isCountersBeingHide}
                setIsCountersBeingHide={setIsCountersBeingHide}
            />
            <CommentElements 
                isCountersVisible={isCountersVisible} 
                screenFormat={screenFormat}
                isCountersBeingHide={isCountersBeingHide}
                setIsCountersVisible={setIsCountersVisible}
            />
        </div>
    )
}

export default PostInteractions