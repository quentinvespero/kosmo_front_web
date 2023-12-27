import React from 'react'
import PostThemeElements from './PostThemeElements'
import PostContent from './PostContent'
import PostInteractions from './postInteractions/PostInteractions'
import { screenFormatProps } from '../../interfaces/interfaces'

const Post:React.FC<screenFormatProps> = ({ screenFormat }) => {
    return (
        <div className='post'>
            <div className="innerPost">
                <PostThemeElements/>
                <PostContent/>
            </div>
            <PostInteractions screenFormat={ screenFormat }/>
        </div>
    )
}

export default Post