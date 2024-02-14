import { ButtonWithIconProps } from "./buttonsInterfaces";
import { Post } from "./datasInterfaces";
import { ViewTypeSelectorProps } from "./logicComponents";
import { FeedSelectorProps } from "./topMenuInterfaces";

export interface InnerSectionProps {
    selectedFeed?: FeedSelectorProps['selectedFeed']
}

export interface InnerSectionHomeProps {
    // isPostSelected?:boolean
    // selectedPostId?:Post['_id']
    idSelectedPost?:string
    // viewType: 'basic' | 'columns' | 'details'
}

export interface ViewTypeButtonProps {
    buttonText:ButtonWithIconProps['buttonText']
    buttonIcon:ButtonWithIconProps['buttonIcon']
    viewType: ViewTypeSelectorProps['viewType']
    setViewType: ViewTypeSelectorProps['setViewType']
}