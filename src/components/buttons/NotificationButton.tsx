// NotificationButton.tsx
import React, { useEffect, useState } from 'react'
import { NotificationButtonProps } from '../../interfaces/buttonsInterfaces'
import './styles.css'

const NotificationButton:React.FC<NotificationButtonProps> = ({}) => {
    
    const [notifications, setNotifications] = useState<NotificationButtonProps[] | null>(null)
    const [isNewNotification, setIsNewNotification] = useState(false)

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

    return (
        <div className='notificationButton'>
            <div className="notificationButton-bell"></div>

            {notifications && notifications.length > 0 && <div className={`notificationButton-true ${isNewNotification ? 'show' : ''}`}></div>}
        </div>
    )
}

export default NotificationButton