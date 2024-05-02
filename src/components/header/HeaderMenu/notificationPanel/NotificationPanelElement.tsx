import React, { useState } from 'react'
import { delayHidingElementDisplayProperty } from '../../../../functions/delayedToggle'
import { NotificationPanelElementProps } from '../../../../interfaces/headerMenuInterfaces/notificationPanelInterfaces'
import ButtonWithIcon from '../../../buttons/ButtonWithIcon'

const NotificationPanelElement:React.FC<NotificationPanelElementProps> = ({notificationType}) => {

    // following the state of the notificaiton (being read or not)
    const [notificationRead, setNotificationRead] = useState(false)

    // function to handle the notification state (being read or not)
    const handleClick = () => {
        setNotificationRead(!notificationRead)
    }

    // call the function delayedToggle (in src/functions/delayedToggle) to delay when the component will be hidden by 200ms
    const displayProperty = delayHidingElementDisplayProperty(!notificationRead, 380)

    return (
        <div className={`notificationPanelElement ${notificationRead ? 'notificationPanelElement-read' : ''}`} onClick={handleClick}>
            <div className={`notificationDot ${notificationRead ? 'notificationDot-hidden' : ''}`} style={{display:displayProperty}}></div>
            <div className={`notificationPanelElement-innerSection ${notificationRead ? 'notificationPanelElement-innerSection-read' : ''}`}>
                <ButtonWithIcon buttonIcon='profile_icon_white2' className='notificationPanelElement-description' buttonText={notificationType}/>
                <div className="divider"></div>
                <div className="notificationPanelElement-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, ipsum!</div>
            </div>
        </div>
    )
}

export default NotificationPanelElement