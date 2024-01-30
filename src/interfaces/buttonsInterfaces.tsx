import { HeaderMenuPanelProps } from "./headerInterfaces"
import { FeedSelectorProps, ScreenProps } from "./interfaces"

// buttonType1 props
// 14/01/24 : I will update this component later but as for now, it's used for the :
// - downvote/upvote buttons
// - search blue arrow button in the search field
// - comment button
// - themes little buttons in post, 
// - login/register buttons
// - entry button in the entry page
export interface ButtonType1Props {
    buttonText?: string
    interactionType?: 'upvote' | 'downvote' | 'search' | 'usual' | 'comment' | 'theme' | 'login' | 'register' | 'entryButton'
    onClick?: () => void
    isActive?: boolean
    screenFormat?: ScreenProps['screenFormat']
}

// buttonType2 props
// used for the trend buttons in the right panel, in the section trending at the moment
// 14/01/24 : will update this component later I think, for it to be more clear
export interface ButtonType2Props {
    buttonText: string
    buttonType: 'button-trend' | 'button-liveEvent'
}

// buttonType3 props
// used for the suggestion section in the right panel, can have two shapes, the squares for friend, or the "following text" shape
// 14/01/24 : will update this component later I think, for it to be more clear
export interface ButtonType3Props {
    buttonText?: string
    buttonImageSrc?: string
    buttonType: 'button-friends' | 'button-feeds'
    
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
    // handleClick?: (selectedElement:HeaderMenuPanelProps['headerMenuPanelSelectedElement']) => void
    handleClick?:HandleClickHeaderMenuButtonsInterface['handleClick']
}

export interface ProfileButtonProps {
    selectedFeed?:FeedSelectorProps['selectedFeed']
    setSelectedFeed?:FeedSelectorProps['setSelectedFeed']
    handleFeedChoice?: () => void
    locationContext: 'feedSelector' | 'headerMenu' | 'post'
    // handleClick?: (selectedElement:HeaderMenuPanelProps['headerMenuPanelSelectedElement']) => void
    handleClick?:HandleClickHeaderMenuButtonsInterface['handleClick']
}

export interface AddPostButton2Props {
    // handleClick?: (selectedElement:HeaderMenuPanelProps['headerMenuPanelSelectedElement']) => void
    handleClick?:HandleClickHeaderMenuButtonsInterface['handleClick']
}

export interface ButtonWithIconProps {
    // buttonText: 'settings' | 'manage_feeds' | 'bookmarks'
    buttonText: string
    buttonIcon: string
}

export interface HideRightPanelButtonProps {
    isRightPanelVisible: boolean
    setIsRightPanelVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export interface CloseButtonProps {
    setHeaderMenuPanelOpen?: (type:boolean) => void
}

// interface for all the buttons in the headerMenu
export interface HandleClickHeaderMenuButtonsInterface {
    handleClick?: (selectedElement:HeaderMenuPanelProps['headerMenuPanelSelectedElement']) => void
}

export interface ExpandButtonProps {
    headerMenuPanelOpen?: HeaderMenuPanelProps['headerMenuPanelOpen']
    setHeaderMenuPanelOpen?: HeaderMenuPanelProps['setHeaderMenuPanelOpen']
}