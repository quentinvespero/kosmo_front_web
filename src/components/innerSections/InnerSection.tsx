import React from 'react'
import { InnerSectionProps, ScreenProps } from '../../interfaces/interfaces'
import Feed from './Feed'
import RightPanel from '../rightPanel/RightPanel'
import Profile from './Profile'

const InnerSection:React.FC<ScreenProps & InnerSectionProps> = ({selectedFeed, screenFormat}) => {
    return (
        <div className='innerSection'>
            {selectedFeed && selectedFeed.includes('feed') && <Feed screenFormat={screenFormat}/>}
            {selectedFeed && screenFormat === 'desktop' && selectedFeed.includes('feed') && <RightPanel/>}
            {selectedFeed === 'profile' && <Profile screenFormat={screenFormat}/>}
        </div>
    )
}

export default InnerSection