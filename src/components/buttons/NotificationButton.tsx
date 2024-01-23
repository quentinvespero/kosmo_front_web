import React, { useEffect, useState } from 'react'
import { NotificationButtonProps } from '../../interfaces/buttonsInterfaces'
import NotificationPanel from '../header/HeaderMenu/NotificationPanel'

const NotificationButton:React.FC<NotificationButtonProps> = ({handleClick}) => {
    
    // the content of the notifications as an array
    // const [notificationsContent, setNotificationsContent] = useState<NotificationButtonProps[] | null>(null)
    
    // the state of the notifications, if there are some new one or not
    const [isNewNotification, setIsNewNotification] = useState(true)

    // variable to show/hide the notificationPanel
    // const [notificationPanelVisibility, setNotificationPanelVisibility] = useState(false)

    // fetching the notifications from the backend, GONNA USE LATER
    // useEffect(() => {
    //     fetch('API_URL')
    //         .then(response => response.json())
    //         .then(data => {
    //             if (data.length > (notificationsContent ? notificationsContent.length : 0)) {
    //                 setIsNewNotification(true)
    //             }
    //             setNotificationsContent(data)
    //         })
    //         .catch(error => console.error(error))
    // }, [])

    // toggling the notifications panel
    // const handleShowingNotificationPanel = () => {
    //     if (!notificationPanelVisibility) {
    //         setNotificationPanelVisibility(true)
    //         setIsNewNotification(false)
    //         setNotificationsContent(['test'])
    //     }
    //     else {
    //         setNotificationPanelVisibility(false)
    //         setIsNewNotification(true)
    //         setNotificationsContent(null)
    //     }
    // }

    return (
        <div className='notificationButton' onClick={() => handleClick && handleClick('notification')}>
            <div className="notificationButton-bell"></div>
            {isNewNotification && <div className={`notificationButton-true ${isNewNotification ? 'show' : ''}`}></div>}
            {/* <div className='notificationButton-true'></div> */}
            {/* {notifications && notifications.length > 0 && <NotificationPanel notifications={notifications}/>} */}
            {/* {notificationPanelVisibility && <NotificationPanel notificationsContent={notificationsContent}/>} */}
        </div>
    )
}

export default NotificationButton