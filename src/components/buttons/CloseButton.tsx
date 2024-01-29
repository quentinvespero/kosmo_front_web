import React from 'react'
import closeIcon from '../../assets/icons/icon_close_white2.svg'
import { CloseButtonProps } from '../../interfaces/buttonsInterfaces'

const CloseButton:React.FC<CloseButtonProps> = ({setHeaderMenuPanelOpen}) => {

    const handleClick = () => {
        if (setHeaderMenuPanelOpen) {
            setHeaderMenuPanelOpen(false)
        }
    }

    return (
        <div 
            className='closeButton' 
            onClick={handleClick}
        >
            <img src={closeIcon} alt="button close" />
        </div>
    )
}

export default CloseButton