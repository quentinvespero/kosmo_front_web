import { FeedSelectorProps, ScreenProps } from "./interfaces";
import { HomeProps } from "./screensInterface";

export interface HeaderProps {
    // headerScreen: 'home' | 'entryPage' <-- deprecated in profit of currentScreen / currentPage
    screenFormat?: ScreenProps['screenFormat']
    selectedFeed?:FeedSelectorProps['selectedFeed']
    currentScreen?: HomeProps['currentScreen']
}

export interface HeaderMenuProps {
    
}

export interface notificationPanelProps {
    notificationsContent: string[]
}