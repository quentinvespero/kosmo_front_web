import { DatasInterfaces, Feed } from "./datasInterfaces"
import { ScreenProps } from "./interfaces"

// DesktopMenu component props
export interface TopMenuProps {
    setTopmenuIsSticky: (topmenuIsSticky:boolean) => void
    topmenuIsSticky: boolean
    screenFormat: ScreenProps['screenFormat']
    selectedFeed: FeedSelectorProps['selectedFeed']
    setSelectedFeed: FeedSelectorProps['setSelectedFeed']
}

export interface FeedSelectorProps {
    screenFormat?: ScreenProps['screenFormat']
    topmenuIsSticky?: TopMenuProps['topmenuIsSticky']
    selectedFeed: 'profile' | string
    setSelectedFeed: (selectedFeed:string) => void
}

export interface FeedElementProps {
    handleClick: (selectedElement:string) => void
    selectedFeed: FeedSelectorProps['selectedFeed']
    feedData: Feed
    // feedData: DatasInterfaces['feeds']
}