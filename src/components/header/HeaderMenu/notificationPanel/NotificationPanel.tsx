import React from 'react'
// import { NotificationPanelProps } from '../../../interfaces/headerInterfaces'
import { HeaderMenuPanelProps, NotificationPanelProps } from '../../../../interfaces/headerMenuInterfaces'
import NotificationElement from './NotificationElement'

const NotificationPanel:React.FC<NotificationPanelProps & HeaderMenuPanelProps> = ({notificationsContent}) => {
    return (
        <div className='notificationPanel'>
            <div className="notificationPanel-buttons">

            </div>
            <div className="notificationPanel-elements-section">
                <NotificationElement notificationType='comment'/>
                <NotificationElement notificationType='follow'/>
                <NotificationElement notificationType='follow'/>
                <NotificationElement notificationType='comment'/>
                <NotificationElement notificationType='follow'/>
            </div>
            {/* <div className="notificationPanel-element">
                <div className="notificationPanel-icon"></div>
                <div className="notificationPanel-text">Element 1</div>
            </div>
            <div className="notificationPanel-element">
                <div className="notificationPanel-icon"></div>
                <div className="notificationPanel-text">Element 1</div>
            </div>
            <div className="notificationPanel-element">
                <div className="notificationPanel-icon"></div>
                <div className="notificationPanel-text">Element 1</div>
            </div>
            <div className="notificationPanel-element">
                <div className="notificationPanel-icon"></div>
                <div className="notificationPanel-text">Element 1</div>
            </div>
            <div className="notificationPanel-element">
                <div className="notificationPanel-icon"></div>
                <div className="notificationPanel-text">Element 1</div>
            </div>
            <div className="notificationPanel-element">
                <div className="notificationPanel-icon"></div>
                <div className="notificationPanel-text">Element 1</div>
            </div> */}
        </div>
    )
}

export default NotificationPanel