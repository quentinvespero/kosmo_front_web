import { AppProps } from "../App"
import { ScreenProps } from "./interfaces"

// export interface HomeProps {
//     currentPage?: 'home' | 'entry'
// }

// export interface EntryPageProps {
//     pageSelection: () => void
//     screenFormat?: ScreenProps['screenFormat']
//     lightFadingDesktop?: boolean
//     currentPage: AppProps['currentPage']
//     setCurrentPage: AppProps['currentPage']
// }

export interface BackgroundLayerProps {
    isVisible: boolean
}

export interface PagesProps {
    transitionBetweenPagesTriggered: boolean
}