import { DatasInterfaces, Post } from "./datasInterfaces"
import { ScreenProps } from "./interfaces"

export interface PostProps {
    postId: string
    // isPostSelected?: boolean
    
    // props to prepare the usage of the id to check whether the id of the post is the same as the one already selected or not before changing the value of isPostSelected
    idSelectedPost: Post['_id']
    setIdSelectedPost: () => void
}

// post interactions - button Up / Down vote
export interface UpDownVoteElementsProps {
    interactionType: 'upvote' | 'downvote'
    
    // in the line below, it says that the property setInteractionChoice is not necessary (with the '?') and that its type is a function that take a parameter interactionChoice that can be one out of the three choices. Also, with the "=> void", it explicitely means that the function returns nothing (void)
    interactionChoice: 'upvote' | 'downvote' | 'none'
    setInteractionChoice: (interactionChoice:'upvote' | 'downvote' | 'none') => void
    
    // defining the props for showing/hiding the counters
    isCountersVisible: boolean
    setIsCountersVisible: (isCountersVisible:boolean) => void

    // defining the props for preparing the counters to be hidden while triggering the animation
    isCountersBeingHide: boolean
    setIsCountersBeingHide: (isCountersBeingHide:boolean) => void
}

    // CommentElements props
    export interface CommentElementsProps {
        isCountersVisible: UpDownVoteElementsProps['isCountersVisible']
        interactionChoice?: UpDownVoteElementsProps['interactionChoice']
        screenFormat?: ScreenProps['screenFormat']
        isCountersBeingHide: boolean
        setIsCountersBeingHide?: (isCountersBeingHide:boolean) => void
        setIsCountersVisible: (isCountersVisible:boolean) => void
    }

    // Counter component props
    export interface CounterProps {
        isCountersVisible: UpDownVoteElementsProps['isCountersVisible']
        setIsCountersVisible:UpDownVoteElementsProps['setIsCountersVisible']
        isCountersBeingHide?: boolean
        setIsCountersBeingHide?: (isCountersBeingHide:boolean) => void
    }

export interface PostContentProps {
    isPostSelected:boolean
}