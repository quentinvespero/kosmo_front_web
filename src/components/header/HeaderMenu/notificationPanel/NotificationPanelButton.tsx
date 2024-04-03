import React from 'react'
import ButtonWithIcon from '../../../buttons/ButtonWithIcon'
import { NotificationPanelButtonProps } from '../../../../interfaces/headerMenuInterfaces/notificationPanelInterfaces'

const NotificationPanelButton:React.FC<NotificationPanelButtonProps> = ({buttonIcon, className}) => {
    return (
        <div className='notificationPanelButton'>
            <ButtonWithIcon buttonText='' buttonIcon={buttonIcon} className={className}/>
        </div>
    )
}

export default NotificationPanelButton