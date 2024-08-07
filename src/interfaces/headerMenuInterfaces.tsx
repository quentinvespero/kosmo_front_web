export interface HeaderMenuProps {
    
}
export interface HeaderMenuPanelProps {
    headerMenuPanelOpen?: boolean
    headerMenuPanelSelectedElement: 'notification' | 'addPost' | 'user'
    setHeaderMenuPanelOpen?: (type:boolean) => void
    setHeaderMenuPanelSelectedElement?: (type:HeaderMenuPanelProps['headerMenuPanelSelectedElement']) => void
}

export interface HeaderMenuPanelElementProps {
    elementType: HeaderMenuPanelProps['headerMenuPanelSelectedElement']
}

// interface for all the buttons in the headerMenu
export interface HandleClickHeaderMenuButtonsInterface {
    handleClick?: (selectedElement:HeaderMenuPanelProps['headerMenuPanelSelectedElement']) => void
}

export interface HeaderMenuButtonExpandProps {
    headerMenuPanelOpen: HeaderMenuPanelProps['headerMenuPanelOpen']
    setHeaderMenuPanelOpen: HeaderMenuPanelProps['setHeaderMenuPanelOpen']
}

// export interface HeaderMenuButtonProps {
//     // onClick: React.Dispatch<React.SetStateAction<HeaderMenuPanelProps['headerMenuPanelSelectedElement']>>
//     onClick: () => void
    
//     // below, we use a "-" because in the component ButtonWithIcon, it's the element that will be use to divide the
//     buttonText?: 'Post'
//     buttonIcon: string
//     className: '-addPost' | '-notification' | '-user'
// }