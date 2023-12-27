import React from 'react'
import PostThemeElements from './PostThemeElements'
import PostContent from './PostContent'
import PostInteractions from './postInteractions/PostInteractions'
import { mobileLayoutProps } from '../../interfaces/interfaces'

const Post:React.FC<mobileLayoutProps> = ({ mobileLayout }) => {
    return (
        <div className='post'>
            <div className="innerPost">
                <PostThemeElements/>
                <PostContent/>
            </div>
            <PostInteractions mobileLayout={ mobileLayout }/>
        </div>
    )
}

export default Post