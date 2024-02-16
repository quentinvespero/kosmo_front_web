import React from 'react'
import { FeedViewsInterfaces } from '../../../../interfaces/feedViewsInterfaces'
import Post from '../../../post/Post'
import { ScreenProps } from '../../../../interfaces/interfaces'

const FeedRegular:React.FC<FeedViewsInterfaces & ScreenProps> = ({posts, screenFormat, idSelectedPost, setIdSelectedPost, selectedViewType}) => {
    return (
        <div className={`feedViews feedRegular 
            ${screenFormat === 'desktop' ? 'feedRegular-desktop' : ''}
            ${screenFormat === 'mobile' ? 'feedRegular-mobile' : ''}
            ${screenFormat === 'tablet' ? 'feedRegular-tablet' : ''}
            `}
        >
            {/* <div className="test">regular</div> */}
            {posts && 
                posts.map((post) => (
                <Post 
                    key={post._id} 
                    screenFormat={screenFormat} 
                    postId={post._id} 
                    idSelectedPost={idSelectedPost} 
                    setIdSelectedPost={setIdSelectedPost} 
                    selectedViewType={selectedViewType}
                />
            ))}
        </div>
    )
}

export default FeedRegular