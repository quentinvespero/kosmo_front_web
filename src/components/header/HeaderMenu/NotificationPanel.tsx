import React from 'react'
// import { NotificationPanelProps } from '../../../interfaces/headerInterfaces'
import { HeaderMenuPanelProps, NotificationPanelProps } from '../../../interfaces/headerMenuInterfaces'

const NotificationPanel:React.FC<NotificationPanelProps & HeaderMenuPanelProps> = ({notificationsContent}) => {
    return (
        <div className='notificationPanel'>
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
            </div>
            <div className="notificationPanel-element">
                <div className="notificationPanel-icon"></div>
                <div className="notificationPanel-text">Element 1</div>
            </div>
        </div>
    )
}

export default NotificationPanel