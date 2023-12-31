import React, { useEffect, useState } from 'react'
import Post from './post/Post'
import { ScreenProps } from '../interfaces/interfaces'
import { DatasInterfaces } from '../interfaces/datasInterfaces'

const Feed:React.FC<ScreenProps> = ({screenFormat}) => {

    const [datas, setDatas] = useState<DatasInterfaces | null>(null)

    useEffect(() => {
        fetch('src/assets/bdd.json')
            .then(response => response.json())
            .then(datas => setDatas(datas))
    }, [])

    if (!datas) {
        return <div className='loadingPost'>loading...</div>
    }

    return (
        <div className='feed'>
            {datas &&
            datas.posts && 
            datas.posts.map((post) => (
                <Post key={post._id} screenFormat={screenFormat} postId={post._id}/>
            ))}
        </div>
    )
}

export default Feed