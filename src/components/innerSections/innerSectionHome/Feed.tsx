import React, { useEffect, useState } from 'react'
import Post from '../../post/Post'
import { ScreenProps } from '../../../interfaces/interfaces'
import { DatasInterfaces } from '../../../interfaces/datasInterfaces'
import FeedDetailsView from './feedViews/FeedDetailsView'
import FeedRegularView from './feedViews/FeedRegularView'
import FeedColumnsView from './feedViews/FeedColumnsView'
import { FeedProps } from '../../../interfaces/innerSectionsInterfaces'
import { PostInterfaces, PostsInterfaces } from '../../../interfaces/datas/postsDataInterfaces'

const Feed:React.FC<ScreenProps & FeedProps> = ({screenFormat, selectedViewType}) => {

    const [postsData, setPostsData] = useState<PostsInterfaces['posts'] | null>(null)

    // follow the state of the post being selected to show more details about it
    const [idSelectedPost, setIdSelectedPost] = useState<string>('')

    useEffect(() => {
        // fetch('src/assets/bdd.json')
        fetch('./assets/jsons/posts.json')
            .then(response => response.json())
            .then(postsData => setPostsData(postsData.posts))
            .catch(error => console.error('Error while trying to fetch the posts:', error))
    }, [])

    if (!postsData) {
        return <div className='feed-loadingPost'>
            <span className="feed-glitterElement1 feed-glitterElement">l</span>
            <span className="feed-glitterElement2 feed-glitterElement">o</span>
            <span className="feed-glitterElement1 feed-glitterElement">a</span>
            <span className="feed-glitterElement2 feed-glitterElement">d</span>
            <span className="feed-glitterElement1 feed-glitterElement">i</span>
            <span className="feed-glitterElement2 feed-glitterElement">n</span>
            <span className="feed-glitterElement1 feed-glitterElement">g</span>
            <span className="feed-glitterElement2 feed-glitterElement">.</span>
            <span className="feed-glitterElement1 feed-glitterElement">.</span>
            <span className="feed-glitterElement2 feed-glitterElement">.</span>
            <span className="feed-glitterElement2 feed-glitterElement">.</span>
        </div>
    }

    return (
        <div 
            className={`feed
                ${selectedViewType === 'regularView' ? 'feed-regularView' : ''}
                ${selectedViewType === 'detailsView' ? 'feed-detailsView' : ''}
                ${selectedViewType === 'columnsView' ? 'feed-columnsView' : ''}
            `}
        >

            {selectedViewType === 'regularView' && <FeedRegularView 
                posts={postsData} 
                screenFormat={screenFormat} 
                idSelectedPost={idSelectedPost} 
                setIdSelectedPost={setIdSelectedPost}
                selectedViewType={selectedViewType}
            />}

            {selectedViewType === 'detailsView' && screenFormat !== 'mobile' && <FeedDetailsView 
                posts={postsData} 
                screenFormat={screenFormat} 
                idSelectedPost={idSelectedPost} 
                setIdSelectedPost={setIdSelectedPost}
                selectedViewType={selectedViewType}
            />}

            {selectedViewType === 'columnsView' && screenFormat !== 'mobile' && <FeedColumnsView 
                posts={postsData} 
                screenFormat={screenFormat} 
                idSelectedPost={idSelectedPost} 
                setIdSelectedPost={setIdSelectedPost}
                selectedViewType={selectedViewType}
            />}
            
        </div>
    )
}

export default Feed