import React from 'react'
import { FeedViewsInterfaces } from '../../../../interfaces/feedViewsInterfaces'
import { ScreenProps } from '../../../../interfaces/interfaces'
import Post from '../../../post/Post'
import FeedDetailsPanel from './FeedDetailsPanel'
import PostsFeedMapper from '../PostsFeedMapper'

const FeedDetailsView:React.FC<FeedViewsInterfaces & ScreenProps> = ({posts, screenFormat, idSelectedPost, setIdSelectedPost, selectedViewType}) => {
    return (
        <div className='feedViews feedDetailsView'>
            <PostsFeedMapper 
                posts={posts} 
                screenFormat={screenFormat} 
                postLayout='compact' 
                idSelectedPost={idSelectedPost} 
                setIdSelectedPost={setIdSelectedPost} 
                selectedViewType={selectedViewType} 
            />
            {/* <div className="feedDetailsView-postsSection">
                {posts.map((post) => (
                    <Post
                        key={post._id} 
                        screenFormat={screenFormat} 
                        postId={post._id} 
                        idSelectedPost={idSelectedPost} 
                        setIdSelectedPost={setIdSelectedPost} 
                        selectedViewType={selectedViewType}
                        postLayout='compact'
                    />
                ))}
            </div> */}
            
            <FeedDetailsPanel idSelectedPost={idSelectedPost}/>
        </div>
    )
}

export default FeedDetailsView