export interface NotificationPanelElementProps {
    notificationType: 'follow'|'comment'|''
}

export interface NotificationPanelProps {
    notificationsContent?: string[]
}

export interface NotificationPanelButtonProps {
    buttonIcon: string
    className: string
}