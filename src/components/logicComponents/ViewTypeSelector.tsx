import React from 'react'
import { ViewTypeSelectorProps } from '../../interfaces/logicComponents'
import ButtonWithIcon from '../buttons/ButtonWithIcon'
import ViewTypeButton from '../innerSections/innerSectionHome/ViewTypeButton'

const ViewTypeSelector:React.FC<ViewTypeSelectorProps> = ({viewType, setViewType}) => {
    return (
        <div className='viewTypeSelector'>
            <ViewTypeButton buttonView='basic' viewType={viewType} setViewType={setViewType} />
            <ViewTypeButton buttonView='details' viewType={viewType} setViewType={setViewType} />
            <ViewTypeButton buttonView='columns' viewType={viewType} setViewType={setViewType} />
        </div>
    )
}

export default ViewTypeSelector