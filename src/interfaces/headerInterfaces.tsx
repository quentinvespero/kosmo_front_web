import { ScreenProps } from "./interfaces";
// import { HomeProps } from "./pagesInterfaces";

// export interface HeaderProps {
//     // headerScreen: 'home' | 'entryPage' <-- deprecated in profit of currentScreen / currentPage
//     screenFormat?: ScreenProps['screenFormat']
//     selectedFeed?:FeedSelectorProps['selectedFeed']
//     currentPage?: HomeProps['currentPage']
// }

export interface SearchFieldProps {
    // below, this is the type of setIsSearchFieldSelectedOnMobile 🤷🏻‍♂️
    setIsSearchFieldSelectedOnMobile?: React.Dispatch<React.SetStateAction<boolean>>
    isSearchFieldSelectedOnMobile?: boolean
}

export interface PointCounterProps {
    isSearchFieldSelectedOnMobile?: boolean // <-- potentially deprectated
    isHidden?: boolean
}