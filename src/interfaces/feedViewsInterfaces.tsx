import { DatasInterfaces } from "./datasInterfaces";
import { ScreenProps } from "./interfaces";
import { ViewTypeSelectorProps } from "./logicComponents";
// import { ViewTypeSelectorProps } from "./logicComponents";

export interface FeedViewsInterfaces {
    posts: DatasInterfaces['posts']
    screenFormat: ScreenProps['screenFormat']
    idSelectedPost: string
    setIdSelectedPost: (type:string) => void
    selectedViewType: ViewTypeSelectorProps['selectedViewType']
}