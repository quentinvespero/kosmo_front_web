import React, { useState } from 'react'
import { NotificationElementProps } from '../../../../interfaces/headerMenuInterfaces'
import { delayHidingElementDisplayProperty } from '../../../../functions/delayedToggle'

const NotificationElement:React.FC<NotificationElementProps> = ({notificationType}) => {

    // following the state of the notificaiton (being read or not)
    const [notificationRead, setNotificationRead] = useState(false)

    // function to handle the notification state (being read or not)
    const handleClick = () => {
        setNotificationRead(!notificationRead)
    }

    // call the function delayedToggle (in src/functions/delayedToggle) to delay when the component will be hidden by 200ms
    const displayProperty = delayHidingElementDisplayProperty(!notificationRead, 180)

    return (
        <div className='notificationElement' onClick={handleClick}>
            <div className={`notificationDot ${notificationRead ? 'notificationDot-hidden' : ''}`} style={{display:displayProperty}}></div>
            <div 
                className={`notificationElement-innerSection ${notificationRead ? 'notificationElement-innerSection-read' : ''}`}
                // style={{background: notificationRead ? '#2C2C2C' : '#3C3C3C'}}
            >
                <div className="notificationElement-icon"></div>
                <div className="notificationElement-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, ipsum!</div>
            </div>
        </div>
    )
}

export default NotificationElement