import React from 'react'
import { HeaderMenuPanelProps } from '../../../interfaces/headerInterfaces'
import Selector from '../../logicComponents/Selector'
import CloseButton from '../../buttons/CloseButton'
import NotificationPanel from './NotificationPanel'
import AddPost from './AddPost'
import { delayHidingElementDisplayProperty } from '../../../functions/delayedToggle'
import UserSettingsPanel from './UserSettingsPanel'

const HeaderMenuPanel:React.FC<HeaderMenuPanelProps> = ({headerMenuPanelOpen, headerMenuPanelSelectedElement, setHeaderMenuPanelOpen, setHeaderMenuPanelSelectedElement}) => {

    // call the function delayedToggle (in src/functions/delayedToggle) to delay when the component will be hidden by 200ms
    const displayProperty = delayHidingElementDisplayProperty(headerMenuPanelOpen, 200)

    return (
        <div 
            className={`headerMenuPanel ${headerMenuPanelOpen ? 'headerMenuPanel-open' : 'headerMenuPanel-closed'}`}
            style={{display: displayProperty}}
        >
            <Selector headerMenuPanelSelectedElement={headerMenuPanelSelectedElement} setHeaderMenuPanelSelectedElement={setHeaderMenuPanelSelectedElement}/>
            <div className="headerMenuPanel-elements">
                {headerMenuPanelSelectedElement ==='addPost' && <AddPost/>}
                {headerMenuPanelSelectedElement ==='notification' && <NotificationPanel/>}
                {headerMenuPanelSelectedElement ==='user' && <UserSettingsPanel/>}
            </div>
            {/* <CloseButton setHeaderMenuPanelOpen={setHeaderMenuPanelOpen}/> */}
        </div>
    )
}

export default HeaderMenuPanel