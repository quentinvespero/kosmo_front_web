import React, { useRef, useState } from 'react'
// import { HeaderMenuProps } from '../../../interfaces/headerInterfaces'
import { ScreenProps } from '../../../interfaces/interfaces'
import PointCounter from '../PointCounter'
import NotificationButton from '../../buttons/NotificationButton'
import AddPostButton2 from '../../buttons/AddPostButton2'
import ProfileButton from '../../buttons/ProfileButton'
import HeaderMenuPanel from './HeaderMenuPanel'
import ExpandButton from '../../buttons/ExpandButton'
import { HeaderMenuProps } from '../../../interfaces/headerMenuInterfaces'
import outsideClick from '../../../functions/outsideClick'

type SelectedElement = "" | "notification" | "addPost" | "user"

const HeaderMenu:React.FC<HeaderMenuProps & ScreenProps> = ({screenFormat}) => {

    // following state of the panel in the headerMenu
    const [headerMenuPanelOpen, setHeaderMenuPanelOpen] = useState(false)
    
    // following state of the selected category/element in the panel menu (can be 'notification', 'others', maybe post creation..)
    const [headerMenuPanelSelectedElement, setHeaderMenuPanelSelectedElement] = useState<SelectedElement>('user')

    // setting the ref element that will then be used as a parameter in the function outsideClick
    const ref = useRef<HTMLDivElement>(null)

    // function to handle the click on the buttons and show up the different sections of the headerMenu panel (notification, user, addPost)
    const handleClick = (selectedElement:SelectedElement) =>{
        if (headerMenuPanelSelectedElement === selectedElement) {
            setHeaderMenuPanelOpen(!headerMenuPanelOpen)
        }
        else {
            setHeaderMenuPanelOpen(true)
            setHeaderMenuPanelSelectedElement(selectedElement)
        }
    }

    // function to handle the click outside headerMenu (used with the ref property given to the div headerMenu), that will hide the headerMenuPanel
    outsideClick(ref, () => setHeaderMenuPanelOpen(false))

    return (
        <div 
            className='headerMenu'
            ref={ref}
        >
            <div className="headerMenu-elements">
                <AddPostButton2 handleClick={handleClick}/>
                <NotificationButton handleClick={handleClick}/>
                <ProfileButton locationContext='headerMenu' handleClick={handleClick}/>
                <ExpandButton headerMenuPanelOpen={headerMenuPanelOpen} setHeaderMenuPanelOpen={setHeaderMenuPanelOpen}/>
                <PointCounter/>
            </div>
            <HeaderMenuPanel 
                headerMenuPanelOpen={headerMenuPanelOpen} 
                headerMenuPanelSelectedElement={headerMenuPanelSelectedElement}
                setHeaderMenuPanelOpen={setHeaderMenuPanelOpen}
                setHeaderMenuPanelSelectedElement={setHeaderMenuPanelSelectedElement}
            />
        </div>
    )
}

export default HeaderMenu