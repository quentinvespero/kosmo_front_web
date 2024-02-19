import React from 'react'
import { FeedViewsInterfaces } from '../../../../interfaces/feedViewsInterfaces'
import { ScreenProps } from '../../../../interfaces/interfaces'
import Post from '../../../post/Post'
import FeedColumn from './FeedColumn'
import AddFeedButton from './AddFeedButton'

const FeedColumnsView:React.FC<FeedViewsInterfaces & ScreenProps> = ({posts, screenFormat, idSelectedPost, setIdSelectedPost, selectedViewType}) => {
    return (
        <div className='feedViews feedColumnsView'>
            {/* <div className="test">columns</div> */}
            {/* {posts && 
                posts.map((post) => (
                <Post
                    key={post._id} 
                    screenFormat={screenFormat} 
                    postId={post._id} 
                    idSelectedPost={idSelectedPost} 
                    setIdSelectedPost={setIdSelectedPost}
                    selectedViewType={selectedViewType} 
                />
            ))} */}
            <FeedColumn 
                posts={posts}
                screenFormat={screenFormat}
                idSelectedPost={idSelectedPost}
                setIdSelectedPost={setIdSelectedPost}
                selectedViewType={selectedViewType}
            />
            <FeedColumn 
                posts={posts}
                screenFormat={screenFormat}
                idSelectedPost={idSelectedPost}
                setIdSelectedPost={setIdSelectedPost}
                selectedViewType={selectedViewType}
            />
            <FeedColumn 
                posts={posts}
                screenFormat={screenFormat}
                idSelectedPost={idSelectedPost}
                setIdSelectedPost={setIdSelectedPost}
                selectedViewType={selectedViewType}
            />
            {/* <FeedColumn 
                posts={posts}
                screenFormat={screenFormat}
                idSelectedPost={idSelectedPost}
                setIdSelectedPost={setIdSelectedPost}
                selectedViewType={selectedViewType}
            /> */}
            {/* <FeedColumn 
                posts={posts}
                screenFormat={screenFormat}
                idSelectedPost={idSelectedPost}
                setIdSelectedPost={setIdSelectedPost}
                selectedViewType={selectedViewType}
            />
            <FeedColumn 
                posts={posts}
                screenFormat={screenFormat}
                idSelectedPost={idSelectedPost}
                setIdSelectedPost={setIdSelectedPost}
                selectedViewType={selectedViewType}
            /> */}
            <AddFeedButton/>
        </div>
    )
}

export default FeedColumnsView