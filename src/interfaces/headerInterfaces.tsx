import { FeedSelectorProps, ScreenProps } from "./interfaces";
import { HomeProps } from "./pagesInterfaces";

export interface HeaderProps {
    // headerScreen: 'home' | 'entryPage' <-- deprecated in profit of currentScreen / currentPage
    screenFormat?: ScreenProps['screenFormat']
    selectedFeed?:FeedSelectorProps['selectedFeed']
    currentPage?: HomeProps['currentPage']
}

export interface HeaderMenuProps {
    
}

export interface notificationPanelProps {
    notificationsContent: string[]
}