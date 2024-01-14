import { ScreenProps } from "./interfaces"

export interface HomeProps {
    currentPage?: 'home' | 'entry'
}

export interface EntryPageProps {
    pageSelection: () => void
    screenFormat?: ScreenProps['screenFormat']
    lightFadingDesktop?: boolean
    currentPage?: HomeProps['currentPage']
}