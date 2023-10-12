// post interactions - button Up / Down vote
export interface UpDownVoteElementsProps {
    interactionType?: 'upvote' | 'downvote' | 'search'
}

// buttonType1 props
export interface ButtonType1Props {
    buttonText?: string
    interactionType?: 'upvote' | 'downvote' | 'search' | 'usual' | 'comment' | 'theme'
}