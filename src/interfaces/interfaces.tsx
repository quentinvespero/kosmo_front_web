// post interactions - button Up / Down vote
export interface UpDownVoteElementsProps {
    interactionType: 'upvote' | 'downvote'
    interactionChoice: 'upvote' | 'downvote' | 'none'
    //in the line below, it says that the property setInteractionChoice is not necessary (with the '?') and that its type is a function that take a parameter interactionChoice that can be one out of the three choices. Also, with the "=> void", it explicitely means that the function returns nothing (void)
    setInteractionChoice: (interactionChoice:'upvote' | 'downvote' | 'none') => void
    // defining the props for showing/hiding the counters
    isCountersVisible: boolean
    setIsCountersVisible: (isCountersVisible:boolean) => void
}

// buttonType1 props
export interface ButtonType1Props {
    buttonText?: string
    interactionType?: 'upvote' | 'downvote' | 'search' | 'usual' | 'comment' | 'theme' | 'login' | 'register' | 'entryButton'
    onClick?: () => void
    isActive?: boolean
}

// buttonType2 props
export interface ButtonType2Props {
    buttonText: string
    buttonType: 'button-trend' | 'button-liveEvent'
}

// CommentElements props
export interface CommentElementsProps {
    // defining the props for showing/hiding the counters
    isCountersVisible: boolean
    interactionChoice?: UpDownVoteElementsProps['interactionChoice']
}

// DesktopMenu component props
export interface TopMenuProps {
    setIsSticky: (isSticky:boolean) => void
    isSticky: boolean
    mobileLayout: ScreenProps['mobileLayout']
}

// Header component props
export interface HeaderProps {
    headerScreen: 'home' | 'entryPage'
    mobileLayout?: ScreenProps['mobileLayout']
}

// EntryPage component props
export interface EntryPageProps {
    pageSelection: () => void
    mobileLayout?: ScreenProps['mobileLayout']
}

// General props for screens components
export interface ScreenProps {
    mobileLayout?: '' | 'mobile' | 'tablet' | 'desktop'
    animation?: boolean
    setAnimation?: (animation:boolean) => void
}