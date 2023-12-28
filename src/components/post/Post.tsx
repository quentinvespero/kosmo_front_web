import React from 'react'
import PostThemeElements from './PostThemeElements'
import PostContent from './PostContent'
import PostInteractions from './postInteractions/PostInteractions'
import { ScreenProps } from '../../interfaces/interfaces'

const Post:React.FC<ScreenProps> = ({ screenFormat }) => {
    return (
        <div className='post'>
            <div className="innerPost" style={{
                maxWidth: screenFormat!='desktop' ? '18.5rem' : '22rem'
            }}>
                <PostThemeElements/>
                <PostContent/>
            </div>
            <PostInteractions screenFormat={ screenFormat }/>
        </div>
    )
}

export default Post