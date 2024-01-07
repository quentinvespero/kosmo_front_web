import { FeedSelectorProps, ScreenProps } from "./interfaces";

export interface HeaderProps {
    headerScreen: 'home' | 'entryPage'
    screenFormat?: ScreenProps['screenFormat']
    selectedFeed?:FeedSelectorProps['selectedFeed']
}

export interface HeaderMenuProps {
    
}

// export interface PointCounterProps {
//     selectedFeed?:FeedSelectorProps['selectedFeed']
// }