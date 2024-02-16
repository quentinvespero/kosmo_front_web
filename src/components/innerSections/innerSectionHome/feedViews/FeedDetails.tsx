import React from 'react'
import { FeedViewsInterfaces } from '../../../../interfaces/feedViewsInterfaces'
import { ScreenProps } from '../../../../interfaces/interfaces'
import Post from '../../../post/Post'
import FeedDetailsPanel from './FeedDetailsPanel'

const FeedDetails:React.FC<FeedViewsInterfaces & ScreenProps> = ({posts, screenFormat, idSelectedPost, setIdSelectedPost, selectedViewType}) => {
    return (
        <div className='feedViews feedDetails'>
            {/* <div className="test">details</div> */}
            <div className="feedDetailsView-postsSection">
                {posts && 
                    posts.map((post) => (
                    <Post
                        key={post._id} 
                        screenFormat={screenFormat} 
                        postId={post._id} 
                        idSelectedPost={idSelectedPost} 
                        setIdSelectedPost={setIdSelectedPost} 
                        selectedViewType={selectedViewType}
                    />
                ))}
            </div>
            <FeedDetailsPanel/>
        </div>
    )
}

export default FeedDetails