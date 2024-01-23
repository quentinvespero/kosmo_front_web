import React from 'react'
import { HeaderMenuPanelProps } from '../../interfaces/headerInterfaces'

const HeaderMenuPanel:React.FC<HeaderMenuPanelProps> = ({headerMenuPanelOpen, headerMenuPanelSelectedElement}) => {
    return (
        <div 
            className='headerMenuPanel'
            style={headerMenuPanelOpen ? {display: 'flex'} : {display: 'none'}}
        >
            
        </div>
    )
}

export default HeaderMenuPanel