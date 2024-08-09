import React, { Suspense } from 'react'
import { FeedViewsInterfaces } from '../../../../interfaces/feedViewsInterfaces'
import { ScreenProps } from '../../../../interfaces/interfaces'
import Post from '../../../post/Post'
import FeedDetailsPanel from './FeedDetailsPanel'
import PostsFeedMapper from '../PostsFeedMapper'
import FallbackLoading from '../../../FallbackComponents/FallbackLoading'
import { ErrorBoundary } from 'react-error-boundary'
import FallbackError from '../../../FallbackComponents/FallbackError'

const FeedDetailsView:React.FC<FeedViewsInterfaces & ScreenProps> = ({posts, screenFormat, idSelectedPost, setIdSelectedPost, selectedViewType}) => {
    return (
        <div className='feedViews feedDetailsView'>

            <PostsFeedMapper 
                posts={posts} 
                screenFormat={screenFormat} 
                postLayout='compact' 
                idSelectedPost='5f36dccf9bfr7694b4653c6a22' 
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

            <ErrorBoundary fallback={<FallbackError/>}>
                <Suspense fallback={<FallbackLoading/>}>
                    <FeedDetailsPanel idSelectedPost={idSelectedPost}/>
                </Suspense>
            </ErrorBoundary>
        </div>
    )
}

export default FeedDetailsView