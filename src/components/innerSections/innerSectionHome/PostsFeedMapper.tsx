import { PostInterfaces, PostsInterfaces } from "../../../interfaces/datas/postsDataInterfaces"
import { FeedViewsInterfaces } from "../../../interfaces/feedViewsInterfaces"
import { ScreenProps } from "../../../interfaces/interfaces"
import { ViewTypeSelectorProps } from "../../../interfaces/logicComponents"
import Post, { PostProps } from "../../post/Post"

export interface PostsFeedMapperProps {
    posts: PostsInterfaces['posts']
    idSelectedPost:FeedViewsInterfaces['idSelectedPost']
    setIdSelectedPost:FeedViewsInterfaces['setIdSelectedPost']
    selectedViewType:ViewTypeSelectorProps['selectedViewType']
    postLayout: PostProps['postLayout']
}

const PostsFeedMapper:React.FC<PostsFeedMapperProps & ScreenProps> = ({posts, screenFormat, postLayout, idSelectedPost, setIdSelectedPost, selectedViewType}) => {

    const classesToApply = () => {

        let classes = 'postsFeedMapper'

        switch (selectedViewType) {
            
            case 'regularView':

                classes += ' postsFeedMapper-regularView'
                switch (screenFormat) {
                    case 'desktop': classes += ' postsFeedMapper-regularView-desktop'
                        break
                    case 'mobile': classes += ' postsFeedMapper-regularView-mobile'
                        break
                    case 'tablet': classes += ' postsFeedMapper-regularView-tablet'
                        break
                }
                break
            
            case 'detailsView': classes += ' postsFeedMapper-detailsView'
                break

            case 'columnsView': classes += ' postsFeedMapper-columnsView'
                break
        }

        return classes
    }

    return (
        <div className={classesToApply()}>
            {posts.map((post) => (
                <Post
                    key={post._id} 
                    screenFormat={screenFormat} 
                    postId={post._id} 
                    idSelectedPost={idSelectedPost} 
                    setIdSelectedPost={setIdSelectedPost} 
                    selectedViewType={selectedViewType}
                    postLayout={postLayout}
                />
            ))}
        </div>
    )
}

export default PostsFeedMapper