import React from 'react'
import ButtonWithIcon from '../../../buttons/ButtonWithIcon'
import { FeedColumnButtonProps } from '../../../../interfaces/feedViewsInterfaces'

const FeedColumnButton:React.FC<FeedColumnButtonProps> = ({buttonIcon, buttonText, isFilterPanelVisible, setIsFilterPanelVisible}) => {

    const handleClick = () => {
        if (setIsFilterPanelVisible) {
            setIsFilterPanelVisible(!isFilterPanelVisible)
        }
    }

    return (
        <div 
            className='feedColumnButton' 
            onClick={handleClick}
        >
            <ButtonWithIcon buttonIcon={buttonIcon} buttonText={buttonText}/>
        </div>
    )
}

export default FeedColumnButton