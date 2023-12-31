import React, { useState } from 'react'
import { FeedSelectorProps, ScreenProps } from '../interfaces/interfaces'
import jsonData from '../../src/assets/bdd.json'

const FeedSelector: React.FC<FeedSelectorProps & ScreenProps> = ({ screenFormat, topmenuIsSticky }) => {

    const [selectedFeed, setSelectedFeed] = useState('feed1')

    const handleFeedChoice = (feedId: string) => {
        setSelectedFeed(feedId)
    }

    return (
        <div className='feedSelector' style={{
            flexWrap: screenFormat === 'mobile' && !topmenuIsSticky ? 'wrap' : 'unset',
            gap: topmenuIsSticky ? '.2rem' : '.7rem'
        }}>
            <div className="feedElements feedElements-profile">{screenFormat != 'mobile' && 'Profile'}</div>
            {jsonData && 
            jsonData.feeds.length > 0 &&
            jsonData.feeds.map((feed) => (
                <div
                    key={feed._id}
                    className={`feedElements ${feed._id} ${selectedFeed === feed._id ? 'feedElements-selected' : ''}`}
                    onClick={() => handleFeedChoice(feed._id)}
                >
                    {feed.name}
                </div>
            ))}
        </div>
    )
}

export default FeedSelector