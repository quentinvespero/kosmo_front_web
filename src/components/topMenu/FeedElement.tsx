import React from 'react'
import { FeedElementProps } from '../../interfaces/topMenuInterfaces'

const FeedElement:React.FC<FeedElementProps> = ({handleClick, selectedFeed, feedData}) => {
    return (
        <div
            key={feedData._id}
            className={`feedElements ${feedData._id} ${selectedFeed === feedData._id ? 'feedElements-selected' : ''}`}
            onClick={() => handleClick(feedData._id)}
        >
            {feedData.name}
        </div>
    )
}

export default FeedElement