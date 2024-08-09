import React, { Suspense, useState } from 'react'
// import { InnerSectionProps } from '../../../interfaces/innerSectionsInterfaces'
import Feed from './Feed'
import { ScreenProps } from '../../../interfaces/interfaces'
import RightPanel from '../../rightPanel/RightPanel'
import ViewTypeSelector from '../../logicComponents/ViewTypeSelector'
import { ViewTypeSelectorProps } from '../../../interfaces/logicComponents'
import { InnerSectionProps } from '../InnerSection'
import { ErrorBoundary } from 'react-error-boundary'
import FallbackError from '../../FallbackComponents/FallbackError'
import FallbackLoading from '../../FallbackComponents/FallbackLoading'

export interface InnerSectionHomeProps {
    // isPostSelected?:boolean
    // selectedPostId?:Post['_id']
    idSelectedPost?:string
    // viewType: 'basic' | 'columns' | 'details'
    selectedViewType: ViewTypeSelectorProps['selectedViewType']
    setSelectedViewType: ViewTypeSelectorProps['setSelectedViewType']
    // selectedFeed:InnerSectionProps['selectedFeed']
    currentInnerSection: InnerSectionProps['currentInnerSection']
}

const InnerSectionHome:React.FC<ScreenProps & InnerSectionHomeProps> = ({screenFormat, idSelectedPost, selectedViewType, setSelectedViewType, currentInnerSection}) => {

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

                <ErrorBoundary fallback={<FallbackError/>}>
                    <Suspense fallback={<FallbackLoading/>}>
                        <Feed screenFormat={screenFormat} selectedViewType={selectedViewType}/>
                    </Suspense>
                </ErrorBoundary>
            </div>

            {currentInnerSection && 
                screenFormat === 'desktop' && 
                currentInnerSection !== 'profile' && 
                !idSelectedPost &&
                <RightPanel selectedViewType={selectedViewType}/>
            }
        </div>
    )
}

export default InnerSectionHome