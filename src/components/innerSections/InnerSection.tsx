import React, { useState } from 'react'
// import { InnerSectionProps, ScreenProps } from '../../interfaces/interfaces'
import Feed from './innerSectionHome/Feed'
import Profile from './Profile'
// import { InnerSectionProps } from '../../interfaces/innerSectionsInterfaces'
import { ScreenProps } from '../../interfaces/interfaces'
import InnerSectionHome from './innerSectionHome/InnerSectionHome'
import { ViewTypeSelectorProps } from '../../interfaces/logicComponents'
import { FeedSelectorProps } from '../topMenu/FeedSelector'

export interface InnerSectionProps {
    selectedFeed?: FeedSelectorProps['selectedFeed']
    selectedViewType: ViewTypeSelectorProps['selectedViewType']
    setSelectedViewType: ViewTypeSelectorProps['setSelectedViewType']
    currentInnerSection: 'profile' | 'settings' | 'feedManagement' | 'bookmarks' | 'feed' | ''
    setCurrentInnerSection: React.Dispatch<React.SetStateAction<InnerSectionProps['currentInnerSection']>>
}

const InnerSection:React.FC<ScreenProps & InnerSectionProps> = ({selectedFeed, screenFormat, selectedViewType, setSelectedViewType, currentInnerSection, setCurrentInnerSection}) => {

    return (
        <div 
            className={`innerSection 
                ${currentInnerSection === 'profile' ? 'innerSection-profile' : ''}
            `}
        >

            {currentInnerSection && 
            currentInnerSection === 'feed' && 
                <InnerSectionHome 
                    screenFormat={screenFormat} 
                    // selectedFeed={selectedFeed}
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