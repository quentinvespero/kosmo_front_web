import React from 'react'
import { FeedViewsInterfaces } from '../../../../interfaces/feedViewsInterfaces'
import Post from '../../../post/Post'
import SearchField from '../../../header/SearchField'

const FeedColumn:React.FC<FeedViewsInterfaces> = ({posts, screenFormat, idSelectedPost, setIdSelectedPost, selectedViewType}) => {
    return (
        <div className='feedColumn'>
            <SearchField/>
            <div className="feedColumn-posts">
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
        </div>
    )
}

export default FeedColumn