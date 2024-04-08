import React, { useState } from 'react'
import { FeedViewsInterfaces } from '../../../../interfaces/feedViewsInterfaces'
import { ScreenProps } from '../../../../interfaces/interfaces'
import Post from '../../../post/Post'
import FeedColumn from './FeedColumn'
import AddFeedButton from './AddFeedButton'

interface Column {
    id: string
}

const FeedColumnsView:React.FC<FeedViewsInterfaces & ScreenProps> = ({posts, screenFormat, idSelectedPost, setIdSelectedPost, selectedViewType}) => {

    const [columns, setColumns] = useState<Column[]>([{ id: 'column1' }])

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
            />
            <FeedColumn 
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