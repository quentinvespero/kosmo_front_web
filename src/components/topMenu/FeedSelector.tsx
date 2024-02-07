import React from 'react'
import { FeedSelectorProps, ScreenProps } from '../../interfaces/interfaces'
import jsonData from '../../assets/bdd.json'
import ProfileButton from '../buttons/ProfileButton'
import FeedElement from './FeedElement'

const FeedSelector: React.FC<FeedSelectorProps & ScreenProps> = ({ screenFormat, topmenuIsSticky, selectedFeed, setSelectedFeed }) => {

    // changing the state of selected feed in home component
    const handleFeedChoice = (feedId: string) => {
        setSelectedFeed(feedId)
    }

    return (
        <div className='feedSelector' style={{
            flexWrap: screenFormat === 'mobile' && !topmenuIsSticky ? 'wrap' : 'unset',
        }}>
            <div 
                className={`feedElements feedElements-profile ${selectedFeed === 'profile' ? 'feedElements-profile-selected' : ''}`} 
                onClick={() => handleFeedChoice('profile')}
            >
                {screenFormat != 'mobile' && 'Profile'}
            </div>
            {/* <ProfileButton locationContext='feedSelector' selectedFeed={selectedFeed} setSelectedFeed={setSelectedFeed} handleClick={handleFeedChoice}/> */}
            {jsonData && 
            jsonData.feeds.length > 0 &&
            jsonData.feeds.map((feed) => (
                <FeedElement handleClick={handleFeedChoice} selectedFeed={selectedFeed} feedData={feed}/>
                // <div
                //     key={feed._id}
                //     className={`feedElements ${feed._id} ${selectedFeed === feed._id ? 'feedElements-selected' : ''}`}
                //     onClick={() => handleFeedChoice(feed._id)}
                // >
                //     {feed.name}
                // </div>
            ))}
        </div>
    )
}

export default FeedSelector