import React from 'react'
import { HeaderMenuPanelProps } from '../../../interfaces/headerInterfaces'
import Selector from '../../logicComponents/Selector'
import CloseButton from '../../buttons/CloseButton'
import NotificationPanel from './NotificationPanel'
import { delayHidingElementDisplayProperty } from '../../../functions/delayedToggle'
import UserSettingsPanel from './UserSettingsPanel'
import AddPostPanel from './addPostPanel/AddPostPanel'

const HeaderMenuPanel:React.FC<HeaderMenuPanelProps> = ({headerMenuPanelOpen, headerMenuPanelSelectedElement, setHeaderMenuPanelOpen, setHeaderMenuPanelSelectedElement}) => {

    // call the function delayedToggle (in src/functions/delayedToggle) to delay when the component will be hidden by 200ms
    const displayProperty = delayHidingElementDisplayProperty(headerMenuPanelOpen, 200)

    // function for showing/hiding elements (notification, addPost, userSettings) in the headerMenuPanel-elements
    // const displayProperty2 = delayHidingElementDisplayProperty(headerMenuPanelOpen, 200)

    return (
        <div 
            className={`headerMenuPanel ${headerMenuPanelOpen ? 'headerMenuPanel-open' : 'headerMenuPanel-closed'}`}
            style={{display: displayProperty}}
        >
            <Selector headerMenuPanelSelectedElement={headerMenuPanelSelectedElement} setHeaderMenuPanelSelectedElement={setHeaderMenuPanelSelectedElement}/>
            <div className="headerMenuPanel-elements">
                <AddPostPanel/>
                <NotificationPanel/>
                <UserSettingsPanel/>
            </div>
            {/* <CloseButton setHeaderMenuPanelOpen={setHeaderMenuPanelOpen}/> */}
        </div>
    )
}

export default HeaderMenuPanel