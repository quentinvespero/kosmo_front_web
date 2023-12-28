import React from 'react'
import Post from './post/Post'
import { ScreenProps } from '../interfaces/interfaces'

const Feed:React.FC<ScreenProps> = ({screenFormat}) => {
    return (
        <div className='feed'>
            <Post screenFormat={screenFormat}/>
            <Post screenFormat={screenFormat}/>
            <Post screenFormat={screenFormat}/>
            <Post screenFormat={screenFormat}/>
            <Post screenFormat={screenFormat}/>
            <Post screenFormat={screenFormat}/>
            <Post screenFormat={screenFormat}/>
            <Post screenFormat={screenFormat}/>
            <Post screenFormat={screenFormat}/>
            <Post screenFormat={screenFormat}/>
            <Post screenFormat={screenFormat}/>
            <Post screenFormat={screenFormat}/>
            <Post screenFormat={screenFormat}/>
            <Post screenFormat={screenFormat}/>
            <Post screenFormat={screenFormat}/>
            <Post screenFormat={screenFormat}/>
            <Post screenFormat={screenFormat}/>
            <Post screenFormat={screenFormat}/>
            <Post screenFormat={screenFormat}/>
            <Post screenFormat={screenFormat}/>
            <Post screenFormat={screenFormat}/>
            <Post screenFormat={screenFormat}/>
            <Post screenFormat={screenFormat}/>
            <Post screenFormat={screenFormat}/>
            <Post screenFormat={screenFormat}/>
            <Post screenFormat={screenFormat}/>
        </div>
    )
}

export default Feed