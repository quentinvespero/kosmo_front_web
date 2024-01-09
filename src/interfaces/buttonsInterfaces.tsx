import { FeedSelectorProps, ScreenProps } from "./interfaces"

// buttonType1 props
export interface ButtonType1Props {
    buttonText?: string
    interactionType?: 'upvote' | 'downvote' | 'search' | 'usual' | 'comment' | 'theme' | 'login' | 'register' | 'entryButton'
    onClick?: () => void
    isActive?: boolean
    screenFormat?: ScreenProps['screenFormat']
}

// buttonType2 props
export interface ButtonType2Props {
    buttonText: string
    buttonType: 'button-trend' | 'button-liveEvent'
}

// buttonType3 props
export interface ButtonType3Props {
    buttonText?: string
    buttonImageSrc?: string
    
    // buttonImg could be an object that contains both the src of the image and its description for alt
    buttonImg?: {}
}

// FollowButton props
export interface FollowButtonProps {
    buttonText: string
}

// NotificationButton
export interface NotificationButtonProps {
    _id?: string,
    message?: string,
    read?:boolean
}

export interface ProfileButtonProps {
    selectedFeed?:FeedSelectorProps['selectedFeed']
    setselectedFeed?:FeedSelectorProps['setSelectedFeed']
    handleFeedChoice?: () => void
    locationContext: 'feedSelector' | 'headerMenu'
}