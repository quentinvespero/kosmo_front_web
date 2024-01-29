import React from 'react'
import { HideRightPanelButtonProps } from '../../interfaces/buttonsInterfaces'
// import '../../assets/icons/icon_arrow_white2.svg'

const HideRightPanelButton:React.FC<HideRightPanelButtonProps> = ({isRightPanelVisible, setIsRightPanelVisible}) => {

    const handleClick = () => {
        setIsRightPanelVisible(!isRightPanelVisible)
    }

    return (
        // <div className={`hideRightPanelButton ${ isRightPanelVisible ? 'hideRightPanelButton-open' : 'hideRightPanelButton-closed' }`} onClick={handleClick}>
        <div className='hideRightPanelButton' onClick={handleClick}>
            <img 
                src="src/assets/icons/icon_arrow_white2.svg" 
                alt="arrow icon" 
                style={{ transform: isRightPanelVisible ? 'rotate(0deg)' : 'rotate(180deg)'}}
            />
        </div>
    )
}

export default HideRightPanelButton