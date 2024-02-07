// post
// 14/01/24 : ⬇️ deprecated, this has been moved to the interface file relative to post : postInterfaces

    // post interactions - button Up / Down vote
    // export interface UpDownVoteElementsProps {
    //     interactionType: 'upvote' | 'downvote'
        
    //     // in the line below, it says that the property setInteractionChoice is not necessary (with the '?') and that its type is a function that take a parameter interactionChoice that can be one out of the three choices. Also, with the "=> void", it explicitely means that the function returns nothing (void)
    //     interactionChoice: 'upvote' | 'downvote' | 'none'
    //     setInteractionChoice: (interactionChoice:'upvote' | 'downvote' | 'none') => void
        
    //     // defining the props for showing/hiding the counters
    //     isCountersVisible: boolean
    //     setIsCountersVisible: (isCountersVisible:boolean) => void

    //     // defining the props for preparing the counters to be hidden while triggering the animation
    //     isCountersBeingHide: boolean
    //     setIsCountersBeingHide: (isCountersBeingHide:boolean) => void
    // }

        // // CommentElements props
        // export interface CommentElementsProps {
        //     isCountersVisible: UpDownVoteElementsProps['isCountersVisible']
        //     interactionChoice?: UpDownVoteElementsProps['interactionChoice']
        //     screenFormat?: ScreenProps['screenFormat']
        //     isCountersBeingHide: boolean
        //     setIsCountersBeingHide?: (isCountersBeingHide:boolean) => void
        //     setIsCountersVisible: (isCountersVisible:boolean) => void
        // }

        // // Counter component props
        // export interface CounterProps {
        //     isCountersVisible: UpDownVoteElementsProps['isCountersVisible']
        //     setIsCountersVisible:UpDownVoteElementsProps['setIsCountersVisible']
        //     isCountersBeingHide?: boolean
        //     setIsCountersBeingHide?: (isCountersBeingHide:boolean) => void
        // }

// //buttons
// 14/01/24 : ⬇️ deprecated, this has been moved to the interface file relative to buttons : buttonsInterfaces

//     // buttonType1 props
//     export interface ButtonType1Props {
//         buttonText?: string
//         interactionType?: 'upvote' | 'downvote' | 'search' | 'usual' | 'comment' | 'theme' | 'login' | 'register' | 'entryButton'
//         onClick?: () => void
//         isActive?: boolean
//         screenFormat?: ScreenProps['screenFormat']
//     }

//     // buttonType2 props
//     export interface ButtonType2Props {
//         buttonText: string
//         buttonType: 'button-trend' | 'button-liveEvent'
//     }

//     // buttonType3 props
//     export interface ButtonType3Props {
//         buttonText?: string
//         buttonImageSrc?: string
//         buttonType: 'button-friends' | 'button-feeds'
        
//         // buttonImg could be an object that contains both the src of the image and its description for alt
//         buttonImg?: {}
//     }

// DesktopMenu component props
export interface TopMenuProps {
    setTopmenuIsSticky: (topmenuIsSticky:boolean) => void
    topmenuIsSticky: boolean
    screenFormat: ScreenProps['screenFormat']
    selectedFeed: FeedSelectorProps['selectedFeed']
    setSelectedFeed: FeedSelectorProps['setSelectedFeed']
}

// // Header component props
// 31/12/23 - deprecated
// export interface HeaderProps {
//     headerScreen: 'home' | 'entryPage'
//     screenFormat?: ScreenProps['screenFormat']
// }

// EntryPage component props
// export interface EntryPageProps {
//     pageSelection: () => void
//     screenFormat?: ScreenProps['screenFormat']
//     lightFadingDesktop?: boolean
// }

// General props for screens components
export interface ScreenProps {
    animation?: boolean
    setAnimation?: (animation:boolean) => void
    screenFormat?: 'mobile' | 'tablet' | 'desktop'
}

// FeedSelector component props
export interface FeedSelectorProps {
    screenFormat?: ScreenProps['screenFormat']
    topmenuIsSticky?: TopMenuProps['topmenuIsSticky']
    selectedFeed: 'profile' | string
    setSelectedFeed: (selectedFeed:string) => void
}

export interface InnerSectionProps {
    selectedFeed?: FeedSelectorProps['selectedFeed']
}

// props redundant that can be used everywhere in the app
export interface GeneralProps{
    isVisible?: boolean
}