import React from 'react'
import { FeedSelectorProps, ScreenProps } from '../../interfaces/interfaces'
import jsonData from '../../assets/bdd.json'
import ProfileButton from '../buttons/ProfileButton'
import FeedElement from './FeedElement'

const FeedSelector:React.FC<FeedSelectorProps & ScreenProps> = ({ screenFormat, topmenuIsSticky, selectedFeed, setSelectedFeed }) => {

    // changing the state of selected feed in home component
    const handleFeedChoice = (feedId: string) => {
        setSelectedFeed(feedId)
    }

    return (
        <div className='feedSelector' style={{
            flexWrap: screenFormat === 'mobile' && !topmenuIsSticky ? 'wrap' : 'unset',
        }}>
            <FeedElement handleClick={handleFeedChoice} selectedFeed={selectedFeed} locationContext='feedSelector'/>
            {/* <ProfileButton locationContext='feedSelector' selectedFeed={selectedFeed} setSelectedFeed={setSelectedFeed} handleClick={handleFeedChoice}/> */}
            {jsonData && 
            jsonData.feeds.length > 0 &&
            jsonData.feeds.map((feed) => (
                <FeedElement handleClick={handleFeedChoice} selectedFeed={selectedFeed} feedData={feed}/>
            ))}
        </div>
    )
}

export default FeedSelector