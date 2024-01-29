import React, { useState } from 'react'
import { HeaderMenuProps } from '../../../interfaces/headerInterfaces'
import { ScreenProps } from '../../../interfaces/interfaces'
import PointCounter from '../PointCounter'
import NotificationButton from '../../buttons/NotificationButton'
import AddPostButton2 from '../../buttons/AddPostButton2'
import ProfileButton from '../../buttons/ProfileButton'
import HeaderMenuPanel from './HeaderMenuPanel'

type SelectedElement = "" | "notification" | "addPost" | "user"

const HeaderMenu:React.FC<HeaderMenuProps & ScreenProps> = ({screenFormat}) => {

    // following state of the panel in the headerMenu
    const [headerMenuPanelOpen, setHeaderMenuPanelOpen] = useState(false)
    
    // following state of the selected category/element in the panel menu (can be 'notification', 'others', maybe post creation..)
    const [headerMenuPanelSelectedElement, setHeaderMenuPanelSelectedElement] = useState<SelectedElement>('')

    const handleClick = (selectedElement:SelectedElement) =>{
        if (headerMenuPanelSelectedElement === selectedElement) {
            setHeaderMenuPanelOpen(!headerMenuPanelOpen)
        }
        else {
            setHeaderMenuPanelOpen(true)
            setHeaderMenuPanelSelectedElement(selectedElement)
        }
    }

    return (
        <div className='headerMenu'>
            <div className="headerMenu-elements">
                {/* <div className="headerMenu-openButton" onClick={handleClick}>
                    <img src="src/assets/icons/icon_arrowBottom_white2.svg" alt="" />
                </div> */}
                <AddPostButton2 handleClick={handleClick}/>
                <NotificationButton handleClick={handleClick}/>
                <ProfileButton locationContext='headerMenu' handleClick={handleClick}/>
                <PointCounter/>
            </div>
            <HeaderMenuPanel 
                headerMenuPanelOpen={headerMenuPanelOpen} 
                headerMenuPanelSelectedElement={headerMenuPanelSelectedElement}
                setHeaderMenuPanelOpen={setHeaderMenuPanelOpen}
            />
        </div>
    )
}

export default HeaderMenu