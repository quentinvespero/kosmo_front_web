export interface HeaderMenuProps {
    
}
export interface HeaderMenuPanelProps {
    headerMenuPanelOpen?: boolean
    headerMenuPanelSelectedElement: 'notification' | 'addPost' | 'user' | ''
    setHeaderMenuPanelOpen?: (type:boolean) => void
    setHeaderMenuPanelSelectedElement?: (type:HeaderMenuPanelProps['headerMenuPanelSelectedElement']) => void
}

export interface NotificationPanelProps {
    notificationsContent?: string[]
}

export interface HeaderMenuPanelElementProps {
    elementType: HeaderMenuPanelProps['headerMenuPanelSelectedElement']
}