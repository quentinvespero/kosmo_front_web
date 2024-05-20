import React, { useState } from 'react'
// import { InnerSectionProps, ScreenProps } from '../../interfaces/interfaces'
import Feed from './innerSectionHome/Feed'
import RightPanel from '../rightPanel/RightPanel'
import Profile from './Profile'
import { InnerSectionProps } from '../../interfaces/innerSectionsInterfaces'
import { ScreenProps } from '../../interfaces/interfaces'
import InnerSectionHome from './innerSectionHome/InnerSectionHome'

const InnerSection:React.FC<ScreenProps & InnerSectionProps> = ({selectedFeed, screenFormat, selectedViewType, setSelectedViewType, currentInnerSection, setCurrentInnerSection}) => {

    return (
        <div 
            className={`innerSection 
                ${selectedFeed === 'profile' ? 'innerSection-profile' : ''}
            `}
        >

            {currentInnerSection && 
            currentInnerSection === 'feed' && 
                <InnerSectionHome 
                    screenFormat={screenFormat} 
                    selectedFeed={selectedFeed}
                    selectedViewType={selectedViewType}
                    setSelectedViewType={setSelectedViewType}
                    currentInnerSection={currentInnerSection}
                />
            }

            {currentInnerSection === 'profile' && <Profile screenFormat={screenFormat}/>}

        </div>
    )
}

export default InnerSection