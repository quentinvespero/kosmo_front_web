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

// interface for all the buttons in the headerMenu
export interface HandleClickHeaderMenuButtonsInterface {
    handleClick?: (selectedElement:HeaderMenuPanelProps['headerMenuPanelSelectedElement']) => void
}

export interface ExpandButtonProps {
    headerMenuPanelOpen?: HeaderMenuPanelProps['headerMenuPanelOpen']
    setHeaderMenuPanelOpen?: HeaderMenuPanelProps['setHeaderMenuPanelOpen']
}