import { RightPanelContent } from "./datasInterfaces"
import { ViewTypeSelectorProps } from "./logicComponents"

// SuggestionSection component props
export interface SuggestionSectionProps {
    datas:RightPanelContent
}

// TrendSection component props
export interface TrendSectionProps {
    datas:RightPanelContent
}

// RightPanel component props
// export interface RightPanelProps {
//     isToggled?: boolean
//     idSelectedPost?:string
//     selectedViewType: ViewTypeSelectorProps['selectedViewType']
// }