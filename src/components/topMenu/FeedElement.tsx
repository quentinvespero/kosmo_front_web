import React from 'react'
import { FeedElementProps } from '../../interfaces/topMenuInterfaces'
import ProfileButton from '../buttons/ProfileButton'

const FeedElement:React.FC<FeedElementProps> = ({handleClick, selectedFeed, feedData}) => {


    
    return (
        <div
            key={feedData && feedData._id}
            className={`feedElements ${feedData && feedData._id} ${selectedFeed === feedData?._id ? 'feedElements-selected' : ''}`}
            onClick={() => feedData && handleClick(feedData._id)}
        >
            {feedData ? feedData.name : <ProfileButton locationContext='feedSelector'/>}
        </div>
    )
}

export default FeedElement