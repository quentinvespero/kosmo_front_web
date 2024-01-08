// NotificationButton.tsx
import React, { useEffect, useState } from 'react'
import { NotificationButtonProps } from '../../interfaces/buttonsInterfaces'
import NotificationPanel from '../header/NotificationPanel'

const NotificationButton:React.FC<NotificationButtonProps> = ({}) => {
    
    // the content of the notifications as an array
    const [notificationsContent, setNotificationsContent] = useState<NotificationButtonProps[] | null>(null)
    
    // the state of the notifications, if there are some new one or not
    const [isNewNotification, setIsNewNotification] = useState(false)

    // variable to show/hide the notificationPanel
    const [notificationPanelVisibility, setNotificationPanelVisibility] = useState(false)

    // fetching the notifications from the backend
    useEffect(() => {
        fetch('API_URL')
            .then(response => response.json())
            .then(data => {
                if (data.length > (notificationsContent ? notificationsContent.length : 0)) {
                    setIsNewNotification(true)
                }
                setNotificationsContent(data)
            })
            .catch(error => console.error(error))
    }, [])

    // toggling the notifications panel
    const handleShowingNotificationPanel = () => {
        if (!notificationPanelVisibility) {
            setNotificationPanelVisibility(true)
            setIsNewNotification(true)
            setNotificationsContent(['test'])
        }
        else {
            setNotificationPanelVisibility(false)
            setIsNewNotification(false)
            setNotificationsContent(null)
        }
    }

    return (
        <div className='notificationButton' onClick={handleShowingNotificationPanel}>
            <div className="notificationButton-bell"></div>
            {notificationsContent && <div className={`notificationButton-true ${isNewNotification ? 'show' : ''}`}></div>}
            {/* <div className='notificationButton-true'></div> */}
            {/* {notifications && notifications.length > 0 && <NotificationPanel notifications={notifications}/>} */}
            {notificationPanelVisibility && <NotificationPanel notificationsContent={notificationsContent}/>}
        </div>
    )
}

export default NotificationButton