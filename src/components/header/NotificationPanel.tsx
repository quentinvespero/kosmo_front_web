import React from 'react'
import { notificationPanelProps } from '../../interfaces/headerInterfaces'

const NotificationPanel:React.FC<notificationPanelProps> = ({notifications}) => {
    return (
        <div className='notificationPanel'>
            <div className="notificationPanel-element">element1</div>
            <div className="notificationPanel-element">element1</div>
            <div className="notificationPanel-element">element1</div>
            <div className="notificationPanel-element">element1</div>
            <div className="notificationPanel-element">element1</div>
            <div className="notificationPanel-element">element1</div>
            <div className="notificationPanel-element">element1</div>
            <div className="notificationPanel-element">element1</div>
            <div className="notificationPanel-element">element1</div>
            <div className="notificationPanel-element">element1</div>
            <div className="notificationPanel-element">element1</div>
        </div>
    )
}

export default NotificationPanel