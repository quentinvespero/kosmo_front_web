import React from 'react'
import { HeaderMenuPanelElementProps, HeaderMenuPanelProps } from '../../../interfaces/headerMenuInterfaces'
import NotificationPanel from './notificationPanel/NotificationPanel'
import AddPostPanel from './addPostPanel/AddPostPanel'
import UserSettingsPanel from './UserSettingsPanel'

const HeaderMenuPanelElement:React.FC<HeaderMenuPanelProps & HeaderMenuPanelElementProps> = ({headerMenuPanelSelectedElement, elementType}) => {

    const isElementSelected = headerMenuPanelSelectedElement === elementType

    // show component based on the value of elementType
    const componentToRender = () => {
        switch (elementType) {
            case 'addPost':
                return <AddPostPanel headerMenuPanelSelectedElement={headerMenuPanelSelectedElement}/>
            case 'notification':
                return <NotificationPanel headerMenuPanelSelectedElement={headerMenuPanelSelectedElement}/>
            case 'user':
                return <UserSettingsPanel headerMenuPanelSelectedElement={headerMenuPanelSelectedElement}/>
            default:
                return <UserSettingsPanel headerMenuPanelSelectedElement={headerMenuPanelSelectedElement}/>
        }
    }

    return (
        <div 
            className={`headerMenuPanelElement ${isElementSelected ? 'headerMenuPanelElement-selected' : ''}`}
            style={{display: isElementSelected ? 'block' : 'none'}}
        >
            {componentToRender()}
        </div>
    )
}

export default HeaderMenuPanelElement