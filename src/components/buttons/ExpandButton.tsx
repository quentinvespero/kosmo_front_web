import React from 'react'
import { ExpandButtonProps, HandleClickHeaderMenuButtonsInterface } from '../../interfaces/buttonsInterfaces'

const ExpandButton:React.FC<HandleClickHeaderMenuButtonsInterface & ExpandButtonProps> = ({handleClick, headerMenuPanelOpen}) => {
    return (
        <div 
            className='expandButton' 
            onClick={() => handleClick && handleClick('user')}
        >
            <img src="src/assets/icons/icon_arrowBottom_white2.svg" alt="" style={{transform: headerMenuPanelOpen ? 'rotate(180deg)' : ''}}/>
        </div>
    )
}

export default ExpandButton