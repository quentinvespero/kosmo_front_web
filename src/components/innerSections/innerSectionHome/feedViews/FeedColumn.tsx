import React, { useState } from 'react'
import { FeedViewsInterfaces } from '../../../../interfaces/feedViewsInterfaces'
import Post from '../../../post/Post'
import SearchField from '../../../header/SearchField'
import FeedColumnButton from './FeedColumnButton'
import FilterPanel from './FilterPanel'

const FeedColumn:React.FC<FeedViewsInterfaces> = ({posts, screenFormat, idSelectedPost, setIdSelectedPost, selectedViewType}) => {

    const [isFilterPanelVisible, setIsFilterPanelVisible] = useState(false)

    return (
        <div className='feedColumn'>
            <div className="feedColumn-buttons">
                <FeedColumnButton 
                    buttonIcon='filter_white2' 
                    buttonText='feedColumnButton_filter-'
                    isFilterPanelVisible={isFilterPanelVisible}
                    setIsFilterPanelVisible={setIsFilterPanelVisible}
                />
                <SearchField/>
                <FeedColumnButton buttonIcon='refresh_white2' buttonText='feedColumnButton-'/>
                <FeedColumnButton buttonIcon='clean_white2' buttonText='feedColumnButton-'/>
                {/* <FeedColumnButton buttonIcon='' buttonText='feedColumnButton-'/> */}
            </div>
            <FilterPanel isFilterPanelVisible={isFilterPanelVisible}/>
            <div className="feedColumn-posts">
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
        </div>
    )
}

export default FeedColumn