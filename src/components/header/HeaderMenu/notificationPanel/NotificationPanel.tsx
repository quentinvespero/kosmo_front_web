import React from 'react'
import { HeaderMenuPanelProps } from '../../../../interfaces/headerMenuInterfaces'
import NotificationPanelElement from './NotificationPanelElement'
import { NotificationPanelProps } from '../../../../interfaces/headerMenuInterfaces/notificationPanelInterfaces'
import NotificationPanelButton from './NotificationPanelButton'

const NotificationPanel:React.FC<NotificationPanelProps & HeaderMenuPanelProps> = ({notificationsContent}) => {
    return (
        <div className='notificationPanel'>
            <div className="notificationPanel-buttons">
                <NotificationPanelButton buttonIcon='clearNotifs_white2' className='clearNotifs'/>
            </div>
            <div className="notificationPanel-elements-section">
                <NotificationPanelElement notificationType='comment'/>
                <NotificationPanelElement notificationType='follow'/>
                <NotificationPanelElement notificationType='follow'/>
                <NotificationPanelElement notificationType='comment'/>
                <NotificationPanelElement notificationType='follow'/>
            </div>
        </div>
    )
}

export default NotificationPanel