import React from 'react'
import { HideRightPanelButtonProps } from '../../interfaces/buttonsInterfaces'
// import '../../assets/icons/icon_arrow_white2.svg'

const HideRightPanelButton:React.FC<HideRightPanelButtonProps> = ({isRightPanelVisible, setIsRightPanelVisible}) => {

    const handleClick = () => {
        setIsRightPanelVisible(!isRightPanelVisible)
    }

    return (
        <div className='hideRightPanelButton' onClick={handleClick}>
            {isRightPanelVisible && <img src="src/assets/icons/icon_arrow_white2.svg" alt="" />}
            {!isRightPanelVisible && <img src="src/assets/icons/icon_arrow2_white2.svg" alt="" />}
        </div>
    )
}

export default HideRightPanelButton