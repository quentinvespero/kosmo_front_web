import { ScreenProps } from "./interfaces"

export interface HomeProps {
    currentScreen?: 'home' | 'entry'
}

export interface EntryPageProps {
    pageSelection: () => void
    screenFormat?: ScreenProps['screenFormat']
    lightFadingDesktop?: boolean
    currentScreen?: HomeProps['currentScreen']
}