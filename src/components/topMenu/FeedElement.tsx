import React from 'react'
// import { FeedElementProps } from '../../interfaces/topMenuInterfaces'
import ProfileButton, { ProfileButtonProps } from '../buttons/ProfileButton'
import { Feed } from '../../interfaces/datasInterfaces'
import { FeedSelectorProps } from './FeedSelector'
import { InnerSectionProps } from '../../interfaces/innerSectionsInterfaces'

export interface FeedElementProps {
    handleClick: (selectedElement:string) => void
    selectedFeed: FeedSelectorProps['selectedFeed']
    feedData: Feed
    // feedData: DatasInterfaces['feeds']
    locationContext?:ProfileButtonProps['locationContext']
    currentInnerSection:InnerSectionProps['currentInnerSection']
}

// this component will show up the feed name if it gets feedData, and if not, it will show up the component ProfileButton
const FeedElement:React.FC<FeedElementProps> = ({handleClick, selectedFeed, feedData, locationContext, currentInnerSection}) => {
    
    // if feedData is given, then it will use the id of the feed, if not, then it means it's the profile button
    // 20/05/24 modification to remove the profile in order to give it the ability to change the innerSection through the props currentInnerSection
    const clickHandler = () => {
        handleClick(feedData._id)
    }

    return (
        <div
            key={feedData && feedData._id}
            className={`feedElement ${selectedFeed === feedData?._id && currentInnerSection !== 'profile' ? 'feedElement-selected' : ''}`}
            onClick={clickHandler}
        >
            <p>{feedData.name}</p>
        </div>
    )
}

export default FeedElement