import React, { useEffect, useState } from 'react'
import { HeaderMenuPanelProps } from '../../../interfaces/headerInterfaces'
import Selector from '../../logicComponents/Selector'
import ButtonWithIcon from '../../buttons/ButtonWithIcon'
import CloseButton from '../../buttons/CloseButton'
import NotificationPanel from './NotificationPanel'
import AddPost from './AddPost'
import PointCounter from '../PointCounter'
import { delayHidingElementDisplayProperty } from '../../../functions/delayedToggle'

const HeaderMenuPanel:React.FC<HeaderMenuPanelProps> = ({headerMenuPanelOpen, headerMenuPanelSelectedElement}) => {

    // call the function delayedToggle (in src/functions/delayedToggle) to delay when the component will be hidden
    const displayProperty = delayHidingElementDisplayProperty(headerMenuPanelOpen, 200)

    return (
        <div 
            className={`headerMenuPanel ${headerMenuPanelOpen ? 'headerMenuPanel-open' : 'headerMenuPanel-closed'}`}
            style={{
                display: displayProperty
            }}
        >
            <Selector/>
            <div className="headerMenuPanel-elements">
                {headerMenuPanelSelectedElement ==='addPost' && <AddPost/>}
                {headerMenuPanelSelectedElement ==='notification' && <NotificationPanel/>}
                {headerMenuPanelSelectedElement ==='user' && <div className="headerMenuPanel-user">
                    <ButtonWithIcon buttonTextAndIcon='manage feeds'/>
                    <ButtonWithIcon buttonTextAndIcon='bookmarks'/>
                    <ButtonWithIcon buttonTextAndIcon='settings'/>
                </div>}
            </div>
            <CloseButton/>
        </div>
    )
}

export default HeaderMenuPanel