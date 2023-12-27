import React from 'react'
import Post from './post/Post'
import { ScreenProps } from '../interfaces/interfaces'

const Feed:React.FC<ScreenProps> = ({screenLayout}) => {
    return (
        <div className='feed'>
            <Post screenLayout={screenLayout}/>
        </div>
    )
}

export default Feed