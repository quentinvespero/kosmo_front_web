import React from 'react'
import { HeaderMenuButtonExpandProps } from '../../../interfaces/headerMenuInterfaces'
import ButtonWithIcon from '../../buttons/ButtonWithIcon'

// button to show up / hide the header menu
const HeaderMenuButtonExpand:React.FC<HeaderMenuButtonExpandProps> = ({headerMenuPanelOpen, setHeaderMenuPanelOpen}) => {

    const handleClick = () => {
        if (setHeaderMenuPanelOpen) {
            setHeaderMenuPanelOpen(!headerMenuPanelOpen)
        }
    }

    return (
        <div 
            className= {`headerMenuButtonExpand ${headerMenuPanelOpen ? 'headerMenuButtonExpand-open' : 'headerMenuButtonExpand-closed'}`}
            onClick={handleClick}
        >
            <ButtonWithIcon 
                buttonIcon='icon_arrowBottom_white2' 
                buttonText='' 
                description='button to show up / hide the header menu' 
                className='headerMenuButtonExpand'
            />
        </div>
    )
}

export default HeaderMenuButtonExpand