import { Post } from "./datasInterfaces";
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