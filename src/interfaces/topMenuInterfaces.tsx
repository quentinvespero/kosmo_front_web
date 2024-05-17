import { ProfileButtonProps } from "./buttonsInterfaces"
import { DatasInterfaces, Feed } from "./datasInterfaces"
import { InnerSectionProps } from "./innerSectionsInterfaces"
import { ScreenProps } from "./interfaces"
import { ViewTypeSelectorProps } from "./logicComponents"

// DesktopMenu component props
export interface TopMenuProps {
    setTopmenuIsSticky: (topmenuIsSticky:boolean) => void
    topmenuIsSticky: boolean
    screenFormat: ScreenProps['screenFormat']
    selectedFeed: FeedSelectorProps['selectedFeed']
    setSelectedFeed: FeedSelectorProps['setSelectedFeed']
    selectedViewType?: ViewTypeSelectorProps['selectedViewType']
    // currentInnerSection: InnerSectionProps['currentInnerSection']
    setCurrentInnerSection: InnerSectionProps['setCurrentInnerSection']
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
    feedData?: Feed
    // feedData: DatasInterfaces['feeds']
    locationContext?:ProfileButtonProps['locationContext']
}