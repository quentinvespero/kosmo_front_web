import React from 'react'
import { ViewTypeSelectorProps } from '../../interfaces/logicComponents'
import ButtonWithIcon from '../buttons/ButtonWithIcon'
import ViewTypeButton from '../innerSections/innerSectionHome/ViewTypeButton'

const ViewTypeSelector:React.FC<ViewTypeSelectorProps> = ({viewType, setViewType}) => {
    return (
        <div className='viewTypeSelector'>
            <ViewTypeButton buttonIcon='icon_bell_grey2' buttonText='' viewType={viewType} setViewType={setViewType} />
            <ViewTypeButton buttonIcon='icon_bell_grey2' buttonText='' viewType={viewType} setViewType={setViewType} />
            <ViewTypeButton buttonIcon='icon_bell_grey2' buttonText='' viewType={viewType} setViewType={setViewType} />
        </div>
    )
}

export default ViewTypeSelector