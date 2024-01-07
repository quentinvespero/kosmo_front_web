// NotificationButton.tsx
import React, { useEffect, useState } from 'react'
import { NotificationButtonProps } from '../../interfaces/buttonsInterfaces'
import NotificationPanel from '../header/NotificationPanel'

const NotificationButton:React.FC<NotificationButtonProps> = ({}) => {
    
    // the content of the notifications as an array
    const [notifications, setNotifications] = useState<NotificationButtonProps[] | null>(null)
    
    // the state of the notifications, if there are some new one or not
    const [isNewNotification, setIsNewNotification] = useState(false)

    // fetching the notifications from the backend
    useEffect(() => {
        fetch('API_URL')
            .then(response => response.json())
            .then(data => {
                if (data.length > (notifications ? notifications.length : 0)) {
                    setIsNewNotification(true)
                }
                setNotifications(data)
            })
            .catch(error => console.error(error))
    }, [])

    // toggling the notifications panel
    const handleShowingNotificationPanel = () => {

    }

    return (
        <div className='notificationButton' onClick={handleShowingNotificationPanel}>
            <div className="notificationButton-bell"></div>
            {/* {notifications && notifications.length > 0 && <div className={`notificationButton-true ${isNewNotification ? 'show' : ''}`}></div>} */}
            <div className='notificationButton-true'></div>
            {/* {notifications && notifications.length > 0 && <NotificationPanel notifications={notifications}/>} */}
            <NotificationPanel notifications={notifications}/>
        </div>
    )
}

export default NotificationButton