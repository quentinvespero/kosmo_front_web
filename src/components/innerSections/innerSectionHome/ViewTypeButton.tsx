import React from 'react'
import { ViewTypeButtonProps } from '../../../interfaces/innerSectionsInterfaces'
import ButtonWithIcon from '../../buttons/ButtonWithIcon'

const ViewTypeButton:React.FC<ViewTypeButtonProps> = ({buttonIcon, buttonText, viewType, setViewType}) => {

    const handleClick = () => {
        // setViewType()
    }

    return (
        <div 
            className='viewTypeButton'
            onClick={handleClick}
        >
            <ButtonWithIcon buttonText={buttonText} buttonIcon={buttonIcon}/>
        </div>
    )
}

export default ViewTypeButton