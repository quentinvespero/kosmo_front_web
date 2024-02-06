import React from 'react'
import { SelectorProps } from '../../interfaces/logicComponents'

const Selector:React.FC<SelectorProps> = ({headerMenuPanelSelectedElement, setHeaderMenuPanelSelectedElement}) => {

    const handleClick = (valueClicked:'addPost'|'notification'|'user') => {
        if (setHeaderMenuPanelSelectedElement) {
            console.log(valueClicked)
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