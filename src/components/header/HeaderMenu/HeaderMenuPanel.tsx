import React, { useEffect, useState } from 'react'
import { HeaderMenuPanelProps } from '../../../interfaces/headerInterfaces'
import Selector from '../../logicComponents/Selector'
import ButtonWithIcon from '../../buttons/ButtonWithIcon'
import CloseButton from '../../buttons/CloseButton'
import NotificationPanel from './NotificationPanel'
import AddPost from './AddPost'
import PointCounter from '../PointCounter'

const HeaderMenuPanel:React.FC<HeaderMenuPanelProps> = ({headerMenuPanelOpen, headerMenuPanelSelectedElement}) => {

    const [displayProperty, setDisplayProperty] = useState('flex')

    useEffect(() => {
        if (headerMenuPanelOpen) {
            setDisplayProperty('flex')
        }
        else {
            setTimeout(() => {
                setDisplayProperty('none')
            }, 200)
        }
    }, [headerMenuPanelOpen])

    return (
        <div 
            // className='headerMenuPanel'
            className={`headerMenuPanel ${headerMenuPanelOpen ? 'headerMenuPanel-open' : 'headerMenuPanel-closed'}`}
            // style={headerMenuPanelOpen ? {display: 'flex'} : {display: 'none'}}
            style={{
                display: displayProperty
            }}
        >
            {/* <div className="dividerElement"></div> */}
            {/* <PointCounter isHidden={headerMenuPanelSelectedElement !== 'user'}/> */}
            <Selector/>
            <div className="headerMenuPanel-elements">
                {headerMenuPanelSelectedElement ==='addPost' && <AddPost/>}
                {headerMenuPanelSelectedElement ==='notification' && <NotificationPanel/>}
                {headerMenuPanelSelectedElement ==='user' && <div className="headerMenuPanel-user">
                    <ButtonWithIcon buttonTextAndIcon='manage feeds'/>
                    <ButtonWithIcon buttonTextAndIcon='bookmarks'/>
                    <ButtonWithIcon buttonTextAndIcon='settings'/>
                </div>}
            </div>
            <CloseButton/>
        </div>
    )
}

export default HeaderMenuPanel