import React, { useState } from 'react'
import { InnerSectionHomeProps, InnerSectionProps } from '../../../interfaces/innerSectionsInterfaces'
import Feed from './Feed'
import { ScreenProps } from '../../../interfaces/interfaces'
import RightPanel from '../../rightPanel/RightPanel'
import ViewTypeSelector from '../../logicComponents/ViewTypeSelector'
import { ViewTypeSelectorProps } from '../../../interfaces/logicComponents'

const InnerSectionHome:React.FC<InnerSectionProps & ScreenProps & InnerSectionHomeProps> = ({selectedFeed, screenFormat, idSelectedPost}) => {

    // following the state of the selected view in feed (details, columns, regular)
    const [selectedViewType, setSelectedViewType] = useState<ViewTypeSelectorProps['selectedViewType']>('regular')

    return (
        <div className='innerSectionHome'>
            <div className="innerSectionHome-feed">
                {screenFormat !== 'mobile' && <ViewTypeSelector selectedViewType={selectedViewType} setSelectedViewType={setSelectedViewType} screenFormat={screenFormat}/>}
                <Feed screenFormat={screenFormat} selectedViewType={selectedViewType}/>
            </div>
            {selectedFeed && 
                screenFormat === 'desktop' && 
                selectedFeed.includes('feed') && 
                !idSelectedPost &&
                <RightPanel/>
            }
            {selectedFeed && 
                screenFormat === 'desktop' && 
                selectedFeed.includes('feed') && 
                idSelectedPost && 
                <RightPanel idSelectedPost={idSelectedPost} />
            }
        </div>
    )
}

export default InnerSectionHome