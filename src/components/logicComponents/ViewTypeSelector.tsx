import React from 'react'
import { ViewTypeSelectorProps } from '../../interfaces/logicComponents'
import ButtonWithIcon from '../buttons/ButtonWithIcon'
import ViewTypeButton from '../innerSections/innerSectionHome/ViewTypeButton'

const ViewTypeSelector:React.FC<ViewTypeSelectorProps> = ({selectedViewType, setSelectedViewType}) => {
    return (
        <div className='viewTypeSelector'>
            <ViewTypeButton buttonViewType='regular' selectedViewType={selectedViewType} setSelectedViewType={setSelectedViewType} />
            <ViewTypeButton buttonViewType='details' selectedViewType={selectedViewType} setSelectedViewType={setSelectedViewType} />
            <ViewTypeButton buttonViewType='columns' selectedViewType={selectedViewType} setSelectedViewType={setSelectedViewType} />
        </div>
    )
}

export default ViewTypeSelector