import React from 'react'
// import { HeaderMenuButtonProps } from '../../../interfaces/headerMenuInterfaces'
import ButtonWithIcon from '../../buttons/ButtonWithIcon'

interface HeaderMenuButtonProps {
    // onClick: React.Dispatch<React.SetStateAction<HeaderMenuPanelProps['headerMenuPanelSelectedElement']>>
    onClick: () => void
    buttonIcon: string
    buttonText?: 'Post'
    
    // below, we use a "-" because in the component ButtonWithIcon, it's the element that will be use to divide the
    className: '-addPost' | '-notification' | '-user' | '-expand'
}

const HeaderMenuButton:React.FC<HeaderMenuButtonProps> = ({buttonIcon, buttonText, onClick, className}) => {
    return (
        <div 
            className={`headerMenuButton headerMenuButton${className}`}
            onClick={onClick}
        >
            <ButtonWithIcon buttonText={buttonText ? buttonText : ''} buttonIcon={buttonIcon} className={'headerMenuButton' + className}/>
        </div>
    )
}

export default HeaderMenuButton