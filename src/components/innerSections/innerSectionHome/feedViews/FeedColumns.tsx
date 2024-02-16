import React from 'react'
import { FeedViewsInterfaces } from '../../../../interfaces/feedViewsInterfaces'
import { ScreenProps } from '../../../../interfaces/interfaces'
import Post from '../../../post/Post'

const FeedColums:React.FC<FeedViewsInterfaces & ScreenProps> = ({posts, screenFormat, idSelectedPost, setIdSelectedPost, selectedViewType}) => {
    return (
        <div className='feedViews feedColums'>
            <div className="test">columns</div>
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
    )
}

export default FeedColums