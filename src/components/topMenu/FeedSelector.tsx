import React from 'react'
import { ScreenProps } from '../../interfaces/interfaces'
import jsonData from '../../assets/bdd.json'
import ProfileButton from '../buttons/ProfileButton'
import FeedElement from './FeedElement'
import { InnerSectionProps } from '../../interfaces/innerSectionsInterfaces'
import { TopMenuProps } from './TopMenu'
// import { TopMenuProps } from '../../interfaces/topMenuInterfaces'

export interface FeedSelectorProps {
    screenFormat?: ScreenProps['screenFormat']
    topmenuIsSticky?: TopMenuProps['topmenuIsSticky']
    selectedFeed: 'profile' | string
    setSelectedFeed: (selectedFeed:string) => void
    setCurrentInnerSection: InnerSectionProps['setCurrentInnerSection']
    currentInnerSection:InnerSectionProps['currentInnerSection']
}

const FeedSelector:React.FC<FeedSelectorProps & ScreenProps> = ({ screenFormat, topmenuIsSticky, selectedFeed, setSelectedFeed, setCurrentInnerSection, currentInnerSection }) => {

    // changing the state of selected feed in home component
    const handleFeedChoice = (feedId: string) => {
        setSelectedFeed(feedId)
        setCurrentInnerSection('feed')
    }

    return (
        <div className='feedSelector' style={{
            flexWrap: screenFormat === 'mobile' && !topmenuIsSticky ? 'wrap' : 'unset',
        }}>
            {/* <FeedElement handleClick={handleFeedChoice} selectedFeed={selectedFeed} locationContext='feedSelector'/> */}
            {/* <ProfileButton locationContext='feedSelector' selectedFeed={selectedFeed} setSelectedFeed={setSelectedFeed} handleClick={handleFeedChoice}/> */}
            <ProfileButton locationContext='feedSelector' setCurrentInnerSection={setCurrentInnerSection} currentInnerSection={currentInnerSection}/>
            {jsonData && 
            jsonData.feeds.length > 0 &&
            jsonData.feeds.map((feed) => (
                <FeedElement handleClick={handleFeedChoice} selectedFeed={selectedFeed} feedData={feed} currentInnerSection={currentInnerSection}/>
            ))}
        </div>
    )
}

export default FeedSelector