import React from 'react'
import { HideRightPanelButtonProps } from '../../interfaces/buttonsInterfaces'
import ButtonWithIcon from './ButtonWithIcon'
// import '../../assets/icons/icon_arrow_white2.svg'

const HideRightPanelButton:React.FC<HideRightPanelButtonProps> = ({isRightPanelVisible, setIsRightPanelVisible}) => {

    const handleClick = () => {
        setIsRightPanelVisible(!isRightPanelVisible)
    }

    return (
        <div 
            className={`hideRightPanelButton ${ isRightPanelVisible ? 'hideRightPanelButton-open' : 'hideRightPanelButton-closed' }`} 
            onClick={handleClick}
        >
            <ButtonWithIcon buttonText='' buttonIcon='icon_arrow_white2' className='hideRightPanelButton'/>
        </div>
    )
}

export default HideRightPanelButton