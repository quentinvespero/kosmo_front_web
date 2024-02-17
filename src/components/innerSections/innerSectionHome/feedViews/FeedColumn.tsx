import React from 'react'
import { FeedViewsInterfaces } from '../../../../interfaces/feedViewsInterfaces'
import Post from '../../../post/Post'

const FeedColumn:React.FC<FeedViewsInterfaces> = ({posts, screenFormat, idSelectedPost, setIdSelectedPost, selectedViewType}) => {
    return (
        <div className='feedColumn'>
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

export default FeedColumn