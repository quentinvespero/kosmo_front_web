// post interactions - button Up / Down vote
export interface UpDownVoteElementsProps {
    interactionType?: 'upvote' | 'downvote' | 'search'
    // active?: true | null
}

// buttonType1 props
export interface ButtonType1Props {
    buttonText?: string
    interactionType?: 'upvote' | 'downvote' | 'search' | 'usual' | 'comment' | 'theme'
}