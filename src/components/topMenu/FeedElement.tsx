import React from 'react'
import { FeedElementProps } from '../../interfaces/topMenuInterfaces'
import ProfileButton from '../buttons/ProfileButton'

// this component will show up the feed name if it gets feedData, and if not, it will show up the component ProfileButton
const FeedElement:React.FC<FeedElementProps> = ({handleClick, selectedFeed, feedData, locationContext}) => {
    
    // if feedData is given, then it will use the id of the feed, if not, then it means it's the profile button
    const clickHandler = () => {
        if (feedData) {
            handleClick(feedData._id)
        }
        else {
            handleClick('profile')
        }
    }

    return (
        <div
            key={feedData && feedData._id}
            className={`feedElement 
                ${feedData ? '' : 'feedElement-profile'} 
                ${selectedFeed === feedData?._id ? 'feedElement-selected' : ''} 
                ${!feedData && selectedFeed === 'profile' && 'feedElement-selected' }
            `}
            onClick={clickHandler}
        >
            {feedData ? <p>{feedData.name}</p> : locationContext && <ProfileButton locationContext={locationContext}/>}
        </div>
    )
}

export default FeedElement