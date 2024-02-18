import React from 'react'
import { ViewTypeSelectorProps } from '../../interfaces/logicComponents'
import ButtonWithIcon from '../buttons/ButtonWithIcon'
import ViewTypeButton from '../innerSections/innerSectionHome/ViewTypeButton'
import { ScreenProps } from '../../interfaces/interfaces'

const ViewTypeSelector:React.FC<ViewTypeSelectorProps & ScreenProps> = ({selectedViewType, setSelectedViewType, screenFormat}) => {
    return (
        <div className='viewTypeSelector'>
            <ViewTypeButton 
                buttonViewType='regularView' 
                selectedViewType={selectedViewType} 
                setSelectedViewType={setSelectedViewType} 
                screenFormat={screenFormat}
            />
            <ViewTypeButton 
                buttonViewType='detailsView' 
                selectedViewType={selectedViewType} 
                setSelectedViewType={setSelectedViewType} 
                screenFormat={screenFormat}
            />
            <ViewTypeButton 
                buttonViewType='columnsView' 
                selectedViewType={selectedViewType} 
                setSelectedViewType={setSelectedViewType} 
                screenFormat={screenFormat}
            />
        </div>
    )
}

export default ViewTypeSelector