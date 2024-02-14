import React from 'react'
import { ViewTypeButtonProps } from '../../../interfaces/innerSectionsInterfaces'
import ButtonWithIcon from '../../buttons/ButtonWithIcon'

const ViewTypeButton:React.FC<ViewTypeButtonProps> = ({viewType, setViewType, buttonView}) => {

    const handleClick = () => {
        // setViewType()
    }

    const buttonIcon = buttonView+'_view_white2'
    const buttonText = 'viewTypeButton-'+buttonView

    return (
        <div 
            className={`viewTypeButton ${buttonText.includes(viewType) ? 'viewTypeButton-selected' : ''}`}
            onClick={handleClick}
        >
            <ButtonWithIcon buttonText={buttonText} buttonIcon={buttonIcon}/>
        </div>
    )
}

export default ViewTypeButton