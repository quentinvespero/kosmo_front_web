import React, { useRef } from 'react'
import Selector from '../../logicComponents/Selector'
// import CloseButton from '../../buttons/CloseButton'
import NotificationPanel from './notificationPanel/NotificationPanel'
import { delayHidingElementDisplayProperty } from '../../../functions/delayedToggle'
import UserSettingsPanel from './UserSettingsPanel'
import AddPostPanel from './addPostPanel/AddPostPanel'
// import { HeaderMenuPanelProps } from '../../../interfaces/headerMenuInterfaces'
import HeaderMenuPanelElement from './HeaderMenuPanelElement'
import outsideClick from '../../../functions/outsideClick'
import { HeaderMenuPanelProps } from '../../../interfaces/headerMenuInterfaces'

const HeaderMenuPanel:React.FC<HeaderMenuPanelProps> = ({headerMenuPanelOpen, headerMenuPanelSelectedElement, setHeaderMenuPanelOpen, setHeaderMenuPanelSelectedElement}) => {

    // call the function delayedToggle (in src/functions/delayedToggle) to delay when the component will be hidden by 200ms
    const displayProperty = delayHidingElementDisplayProperty(headerMenuPanelOpen ? headerMenuPanelOpen : false, 200)

    // function for showing/hiding elements (notification, addPost, userSettings) in the headerMenuPanel-elements
    // const displayProperty2 = delayHidingElementDisplayProperty(headerMenuPanelOpen, 200)

    return (
        <div 
            className={`headerMenuPanel ${headerMenuPanelOpen ? 'headerMenuPanel-open' : 'headerMenuPanel-closed'}`}
            style={{display: displayProperty}}
            // ref={ref}
        >
            <Selector headerMenuPanelSelectedElement={headerMenuPanelSelectedElement} setHeaderMenuPanelSelectedElement={setHeaderMenuPanelSelectedElement}/>
            <HeaderMenuPanelElement elementType='addPost' headerMenuPanelSelectedElement={headerMenuPanelSelectedElement}/>
            <HeaderMenuPanelElement elementType='notification' headerMenuPanelSelectedElement={headerMenuPanelSelectedElement}/>
            <HeaderMenuPanelElement elementType='user' headerMenuPanelSelectedElement={headerMenuPanelSelectedElement}/>
            {/* <CloseButton setHeaderMenuPanelOpen={setHeaderMenuPanelOpen}/> */}
        </div>
    )
}

export default HeaderMenuPanel