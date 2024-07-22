import React from 'react'
import { FeedViewsInterfaces } from '../../../../interfaces/feedViewsInterfaces'
import Post from '../../../post/Post'
import { ScreenProps } from '../../../../interfaces/interfaces'
import PostsFeedMapper from '../PostsFeedMapper'

const FeedRegularView:React.FC<FeedViewsInterfaces & ScreenProps> = ({posts, screenFormat, idSelectedPost, setIdSelectedPost, selectedViewType}) => {   
    return (
        // <div className={`feedViews feedRegularView
        //     ${screenFormat === 'desktop' ? 'feedRegularView-desktop' : ''}
        //     ${screenFormat === 'mobile' ? 'feedRegularView-mobile' : ''}
        //     ${screenFormat === 'tablet' ? 'feedRegularView-tablet' : ''}
        //     `}
        // >
        <div className='feedViews feedRegularView'>

            {/* {posts.map((post) => (
                <Post 
                    key={post._id} 
                    screenFormat={screenFormat} 
                    postId={post._id} 
                    idSelectedPost={idSelectedPost} 
                    setIdSelectedPost={setIdSelectedPost} 
                    selectedViewType={selectedViewType}
                    postLayout='regular'
                />
            ))} */}
            
            <PostsFeedMapper 
                posts={posts} 
                screenFormat={screenFormat} 
                postLayout='regular' 
                idSelectedPost={idSelectedPost} 
                setIdSelectedPost={setIdSelectedPost} 
                selectedViewType={selectedViewType} 
            />

        </div>
    )
}

export default FeedRegularView