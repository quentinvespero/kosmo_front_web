import React from 'react'
import { ExpandButtonProps } from '../../interfaces/headerMenuInterfaces'
// import { ExpandButtonProps, HandleClickHeaderMenuButtonsInterface } from '../../interfaces/buttonsInterfaces'

const ExpandButton:React.FC<ExpandButtonProps> = ({headerMenuPanelOpen, setHeaderMenuPanelOpen}) => {

    const handleClick = () => {
        if (setHeaderMenuPanelOpen) {
            setHeaderMenuPanelOpen(!headerMenuPanelOpen)
        }
    }

    return (
        <div 
            className='expandButton' 
            onClick={handleClick}
        >
            <img src="src/assets/icons/icon_arrowBottom_white2.svg" alt="" style={{transform: headerMenuPanelOpen ? 'rotate(180deg)' : ''}}/>
        </div>
    )
}

export default ExpandButton