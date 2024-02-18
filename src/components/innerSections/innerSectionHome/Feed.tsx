import React, { useEffect, useState } from 'react'
import Post from '../../post/Post'
import { ScreenProps } from '../../../interfaces/interfaces'
import { DatasInterfaces } from '../../../interfaces/datasInterfaces'
import FeedDetailsView from './feedViews/FeedDetailsView'
import FeedRegularView from './feedViews/FeedRegularView'
import FeedColumnsView from './feedViews/FeedColumnsView'
import { FeedProps } from '../../../interfaces/innerSectionsInterfaces'

const Feed:React.FC<ScreenProps & FeedProps> = ({screenFormat, selectedViewType}) => {

    const [datas, setDatas] = useState<DatasInterfaces | null>(null)

    // follow the state of the post being selected to show more details about it
    const [idSelectedPost, setIdSelectedPost] = useState<string>('')

    useEffect(() => {
        fetch('src/assets/bdd.json')
            .then(response => response.json())
            .then(datas => setDatas(datas))
            .catch(error => console.error('Error:', error))
    }, [])

    if (!datas) {
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
            {/* {datas &&
            datas.posts && 
            datas.posts.map((post) => (
                <Post 
                    key={post._id} 
                    screenFormat={screenFormat} 
                    postId={post._id} 
                    idSelectedPost={idSelectedPost} 
                    setIdSelectedPost={setIdSelectedPost} 
                />
            ))} */}

            {selectedViewType === 'detailsView' && screenFormat !== 'mobile' && <FeedDetailsView 
                posts={datas.posts} 
                screenFormat={screenFormat} 
                idSelectedPost={idSelectedPost} 
                setIdSelectedPost={setIdSelectedPost}
                selectedViewType={selectedViewType}
            />}

            {selectedViewType === 'regularView' && <FeedRegularView 
                posts={datas.posts} 
                screenFormat={screenFormat} 
                idSelectedPost={idSelectedPost} 
                setIdSelectedPost={setIdSelectedPost}
                selectedViewType={selectedViewType}
            />}
            {selectedViewType === 'columnsView' && screenFormat !== 'mobile' && <FeedColumnsView 
                posts={datas.posts} 
                screenFormat={screenFormat} 
                idSelectedPost={idSelectedPost} 
                setIdSelectedPost={setIdSelectedPost}
                selectedViewType={selectedViewType}
            />}
        </div>
    )
}

export default Feed