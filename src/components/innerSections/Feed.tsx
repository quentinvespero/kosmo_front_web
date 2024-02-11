import React, { useEffect, useState } from 'react'
import Post from '../post/Post'
import { ScreenProps } from '../../interfaces/interfaces'
import { DatasInterfaces } from '../../interfaces/datasInterfaces'

const Feed:React.FC<ScreenProps> = ({screenFormat}) => {

    const [datas, setDatas] = useState<DatasInterfaces | null>(null)

    // follow the state of the post being selected to show more details about it
    const [idSelectedPost, setIdSelectedPost] = useState<DatasInterfaces|null>('')

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
            className='feed'
            style={{
                gap: screenFormat !== 'desktop' ? '3rem 1.5rem' : '3rem 2rem',
                // maxWidth: screenFormat === 'desktop' ? '75%' : ''
            }}
        >
            {datas &&
            datas.posts && 
            datas.posts.map((post) => (
                <Post 
                    key={post._id} 
                    screenFormat={screenFormat} 
                    postId={post._id} 
                    idSelectedPost={idSelectedPost} 
                    setIdSelectedPost={setIdSelectedPost} 
                />
            ))}
        </div>
    )
}

export default Feed