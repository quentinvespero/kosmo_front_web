import React, { useRef, useState } from 'react'
// import { HeaderMenuProps } from '../../../interfaces/headerInterfaces'
import { ScreenProps } from '../../../interfaces/interfaces'
import PointCounter from '../PointCounter'
// import NotificationButton from '../../buttons/NotificationButton'
// import AddPostButton2 from '../../buttons/AddPostButton2'
import ProfileButton from '../../buttons/ProfileButton'
import HeaderMenuPanel from './HeaderMenuPanel'
import ExpandButton from '../../buttons/ExpandButton'
import { HeaderMenuProps } from '../../../interfaces/headerMenuInterfaces'
import outsideClick from '../../../functions/outsideClick'
import HeaderMenuButton from './HeaderMenuButton'

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
                {/* <AddPostButton2 handleClick={handleClick}/> */}
                {/* <ProfileButton locationContext='headerMenu' handleClick={handleClick}/> */}
                {/* <NotificationButton handleClick={handleClick}/> */}
                <HeaderMenuButton onClick={() => handleClick('addPost')} buttonText='Post' buttonIcon='plus_white2' className='-addPost'/>
                <HeaderMenuButton onClick={() => handleClick('notification')} buttonIcon='bell_white2' className='-notification'/>
                {/* <PointCounter/> */}
                <HeaderMenuButton onClick={() => handleClick('user')} buttonIcon='settings_white2' className='-user'/>
                <div className="dot">•</div>
                {/* <ExpandButton headerMenuPanelOpen={headerMenuPanelOpen} setHeaderMenuPanelOpen={setHeaderMenuPanelOpen}/> */}
                <HeaderMenuButton onClick={() => handleClick('user')} buttonIcon='icon_arrowBottom_white2' className='-expand' />
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