import React from 'react'
import { ViewTypeSelectorProps } from '../../interfaces/logicComponents'
import ButtonWithIcon from '../buttons/ButtonWithIcon'
import ViewTypeButton from '../innerSections/innerSectionHome/ViewTypeButton'
import { ScreenProps } from '../../interfaces/interfaces'

const ViewTypeSelector:React.FC<ViewTypeSelectorProps & ScreenProps> = ({selectedViewType, setSelectedViewType, screenFormat}) => {
    return (
        <div className='viewTypeSelector'>
            <ViewTypeButton 
                buttonViewType='regular' 
                selectedViewType={selectedViewType} 
                setSelectedViewType={setSelectedViewType} 
                screenFormat={screenFormat}
            />
            <ViewTypeButton 
                buttonViewType='details' 
                selectedViewType={selectedViewType} 
                setSelectedViewType={setSelectedViewType} 
                screenFormat={screenFormat}
            />
            <ViewTypeButton 
                buttonViewType='columns' 
                selectedViewType={selectedViewType} 
                setSelectedViewType={setSelectedViewType} 
                screenFormat={screenFormat}
            />
        </div>
    )
}

export default ViewTypeSelector