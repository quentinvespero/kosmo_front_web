import React from 'react'
import { HeaderMenuPanelProps } from '../../interfaces/headerMenuInterfaces'
// import { SelectorProps } from '../../interfaces/logicComponents'

interface SelectorProps {
    headerMenuPanelSelectedElement?: HeaderMenuPanelProps['headerMenuPanelSelectedElement']
    setHeaderMenuPanelSelectedElement: HeaderMenuPanelProps['setHeaderMenuPanelSelectedElement']
}

const Selector:React.FC<SelectorProps> = ({headerMenuPanelSelectedElement, setHeaderMenuPanelSelectedElement}) => {

    const handleClick = (valueClicked:'addPost'|'notification'|'user') => {
        if (setHeaderMenuPanelSelectedElement && valueClicked) {
            // console.log(valueClicked)
            setHeaderMenuPanelSelectedElement(valueClicked)
        }   
    }

    return (
        <div className='selector'>
            <div className="selectorElements selector-addPost" onClick={() => handleClick('addPost')}>Add post</div>
            <p>|</p>
            <div className="selectorElements selector-notification" onClick={() => handleClick('notification')}>Notification</div>
            <p>|</p>
            <div className="selectorElements selector-user" onClick={() => handleClick('user')}>User</div>
        </div>
    )
}

export default Selector