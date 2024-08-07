import { ButtonWithIconProps } from "./buttonsInterfaces";
import { PostInterfaces, PostsInterfaces } from "./datas/postsDataInterfaces";
import { DatasInterfaces } from "./datasInterfaces";
import { ScreenProps } from "./interfaces";
import { ViewTypeSelectorProps } from "./logicComponents";
// import { ViewTypeSelectorProps } from "./logicComponents";

export interface FeedViewsInterfaces {
    posts: PostsInterfaces['posts']
    screenFormat: ScreenProps['screenFormat']
    idSelectedPost: string
    setIdSelectedPost: (type:string) => void
    selectedViewType: ViewTypeSelectorProps['selectedViewType']
}

export interface FeedColumnButtonProps {
    buttonIcon: ButtonWithIconProps['buttonIcon']
    buttonText: ButtonWithIconProps['buttonText']
    isFilterPanelVisible?: boolean
    setIsFilterPanelVisible?: (type:boolean) => void
}

export interface FilterPanelProps{
    isFilterPanelVisible: boolean
}

export interface FeedDetailsPanelProps {
    idSelectedPost: FeedViewsInterfaces['idSelectedPost']
}