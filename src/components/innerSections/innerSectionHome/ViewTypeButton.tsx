import React from 'react'
import { ViewTypeButtonProps } from '../../../interfaces/innerSectionsInterfaces'
import ButtonWithIcon from '../../buttons/ButtonWithIcon'
import HoveringDescription from '../../textComponents/HoveringDescription'
import { ScreenProps } from '../../../interfaces/interfaces'

const ViewTypeButton:React.FC<ViewTypeButtonProps & ScreenProps> = ({selectedViewType, setSelectedViewType, buttonViewType, screenFormat}) => {

    const handleClick = () => {
        setSelectedViewType(buttonViewType)
    }

    const buttonIcon = buttonViewType+'_view_white2'
    // the answer to the question why the string below contain a '-' is in the component ButtonWithIcon
    const buttonText = 'viewTypeButton-'+buttonViewType

    return (
        <div 
            className={`viewTypeButton 
                ${buttonText.includes(selectedViewType) ? 'viewTypeButton-selected' : ''}
                ${screenFormat === 'desktop' ? 'viewTypeButton-desktop' : ''}
            `}
            onClick={handleClick}
        >
            <ButtonWithIcon buttonText={buttonText} buttonIcon={buttonIcon}/>
            {/* <HoveringDescription text='test ezj hze iu rhfejz rhgflieh er jghlkjdf hgkl jezhgjk h'/> */}
        </div>
    )
}

export default ViewTypeButton