import React from 'react'
import { HeaderMenuButtonProps } from '../../../interfaces/headerMenuInterfaces'
import ButtonWithIcon from '../../buttons/ButtonWithIcon'

const HeaderMenuButton:React.FC<HeaderMenuButtonProps> = ({buttonIcon, buttonText, onClick, className}) => {
    return (
        <div 
            className={`headerMenuButton headerMenuButton${className}`}
            onClick={onClick}
        >
            <ButtonWithIcon buttonText={buttonText ? buttonText : ''} buttonIcon={buttonIcon} className={'headerMenuButton'+className}/>
        </div>
    )
}

export default HeaderMenuButton