import { ButtonWithIconProps } from "./buttonsInterfaces";
import { Post } from "./datasInterfaces";
import { ViewTypeSelectorProps } from "./logicComponents";
import { FeedSelectorProps } from "./topMenuInterfaces";

export interface InnerSectionProps {
    selectedFeed?: FeedSelectorProps['selectedFeed']
    selectedViewType: ViewTypeSelectorProps['selectedViewType']
    setSelectedViewType: ViewTypeSelectorProps['setSelectedViewType']
}

export interface InnerSectionHomeProps {
    // isPostSelected?:boolean
    // selectedPostId?:Post['_id']
    idSelectedPost?:string
    // viewType: 'basic' | 'columns' | 'details'
    selectedViewType: ViewTypeSelectorProps['selectedViewType']
    setSelectedViewType: ViewTypeSelectorProps['setSelectedViewType']
}

export interface ViewTypeButtonProps {
    // buttonText:ButtonWithIconProps['buttonText']
    // buttonIcon:ButtonWithIconProps['buttonIcon']
    selectedViewType: ViewTypeSelectorProps['selectedViewType']
    setSelectedViewType: ViewTypeSelectorProps['setSelectedViewType']
    buttonViewType: ViewTypeSelectorProps['selectedViewType']
}

export interface FeedProps {
    selectedViewType: ViewTypeSelectorProps['selectedViewType']
}