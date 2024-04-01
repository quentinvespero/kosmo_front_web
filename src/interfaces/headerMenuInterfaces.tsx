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

export interface HeaderMenuButtonProps {
    // onClick: React.Dispatch<React.SetStateAction<HeaderMenuPanelProps['headerMenuPanelSelectedElement']>>
    onClick: () => void
    
    // below, we use a "-" because in the component ButtonWithIcon, it's the element that will be use to divide the
    buttonText?: 'Post'
    buttonIcon: string
    className: '-addPost' | '-notification' | '-user'
}

export interface NotificationElementProps {
    notificationType: 'follow'|'comment'|''
}