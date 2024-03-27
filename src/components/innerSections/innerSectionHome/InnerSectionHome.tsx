import React, { useState } from 'react'
import { InnerSectionHomeProps, InnerSectionProps } from '../../../interfaces/innerSectionsInterfaces'
import Feed from './Feed'
import { ScreenProps } from '../../../interfaces/interfaces'
import RightPanel from '../../rightPanel/RightPanel'
import ViewTypeSelector from '../../logicComponents/ViewTypeSelector'
import { ViewTypeSelectorProps } from '../../../interfaces/logicComponents'

const InnerSectionHome:React.FC<InnerSectionProps & ScreenProps & InnerSectionHomeProps> = ({selectedFeed, screenFormat, idSelectedPost, selectedViewType, setSelectedViewType}) => {

    // following the state of the selected view in feed (details, columns, regular)
    // const [selectedViewType, setSelectedViewType] = useState<ViewTypeSelectorProps['selectedViewType']>('regularView')

    return (
        <div 
            className={`innerSectionHome
                ${selectedViewType === 'regularView' ? 'innerSectionHome-regularView' : ''}
                ${selectedViewType === 'detailsView' ? 'innerSectionHome-detailsView' : ''}
                ${selectedViewType === 'columnsView' ? 'innerSectionHome-columnsView' : ''}
                ${screenFormat === 'mobile' ? 'innerSectionHome-mobile' : ''}
            `}
        >
            <div className="innerSectionHome-feed">
                {screenFormat !== 'mobile' && <ViewTypeSelector selectedViewType={selectedViewType} setSelectedViewType={setSelectedViewType} screenFormat={screenFormat}/>}
                <Feed screenFormat={screenFormat} selectedViewType={selectedViewType}/>
            </div>

            {selectedFeed && 
                // selectedViewType !== 'columnsView' &&
                screenFormat === 'desktop' && 
                selectedFeed.includes('feed') && 
                !idSelectedPost &&
                <RightPanel selectedViewType={selectedViewType}/>
            }

            {/* ⬇ below, an idea of the right panel being showing up being triggered if a post is being selected */}
            {/* {selectedFeed && 
                selectedViewType !== 'columnsView' &&
                screenFormat === 'desktop' && 
                selectedFeed.includes('feed') && 
                idSelectedPost && 
                <RightPanel idSelectedPost={idSelectedPost} />
            } */}
        </div>
    )
}

export default InnerSectionHome