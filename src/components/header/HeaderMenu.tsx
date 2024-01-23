import React, { useState } from 'react'
import { HeaderMenuProps } from '../../interfaces/headerInterfaces'
import { ScreenProps } from '../../interfaces/interfaces'
import PointCounter from './PointCounter'
import NotificationButton from '../buttons/NotificationButton'
import AddPostButton2 from '../buttons/AddPostButton2'
import ProfileButton from '../buttons/ProfileButton'

const HeaderMenu:React.FC<HeaderMenuProps & ScreenProps> = ({screenFormat}) => {

    // following state of the panel in the headerMenu
    const [headerMenuPanelOpen, setHeaderMenuPanelOpen] = useState(false)
    
    // following state of the selected category/element in the panel menu (can be 'notification', 'others', maybe post creation..)
    const [headerMenuPanelSelectedElement, setHeaderMenuPanelSelectedElement] = useState('')

    return (
        <div className='headerMenu'>
            <div className="headerMenu-elements">
                <AddPostButton2/>
                <NotificationButton/>
                <ProfileButton locationContext='headerMenu'/>
                <PointCounter/>
            </div>
            <div 
                className="headerMenu-panel"
                style={headerMenuPanelOpen ? {display: 'none'} : {}}
            >

            </div>
        </div>
    )
}

export default HeaderMenu