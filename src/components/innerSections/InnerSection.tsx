import React, { useState } from 'react'
import { InnerSectionProps, ScreenProps } from '../../interfaces/interfaces'
import Feed from './Feed'
import RightPanel from '../rightPanel/RightPanel'
import Profile from './Profile'

const InnerSection:React.FC<ScreenProps & InnerSectionProps> = ({selectedFeed, screenFormat}) => {
    return (
        <div className='innerSection'>

            {selectedFeed && 
            selectedFeed.includes('feed') && 
                <div className="innerSection-home">
                    <Feed screenFormat={screenFormat}/>
                    {selectedFeed && screenFormat === 'desktop' && selectedFeed.includes('feed') && <RightPanel/>}
                </div>
            }

            {selectedFeed === 'profile' && 
                <div className="innerSection-profile">
                    <Profile screenFormat={screenFormat}/>
                </div>
            }
        </div>
    )
}

export default InnerSection