import React, { useState } from 'react'
import { InnerSectionHomeProps, InnerSectionProps } from '../../../interfaces/innerSectionsInterfaces'
import Feed from './Feed'
import { ScreenProps } from '../../../interfaces/interfaces'
import RightPanel from '../../rightPanel/RightPanel'
import ViewTypeSelector from '../../logicComponents/ViewTypeSelector'
import { ViewTypeSelectorProps } from '../../../interfaces/logicComponents'

const InnerSectionHome:React.FC<InnerSectionProps & ScreenProps & InnerSectionHomeProps> = ({selectedFeed, screenFormat, idSelectedPost}) => {

    const [viewType, setViewType] = useState<ViewTypeSelectorProps['viewType']>('basic')

    return (
        <div className='innerSectionHome'>
            <div className="innerSectionHome-feed">
                {screenFormat !== 'mobile' && <ViewTypeSelector viewType={viewType} setViewType={setViewType}/>}
                <Feed screenFormat={screenFormat}/>
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