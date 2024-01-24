import React from 'react'
import { HeaderMenuPanelProps } from '../../../interfaces/headerInterfaces'
import Selector from '../../logicComponents/Selector'
import ButtonWithIcon from '../../buttons/ButtonWithIcon'
import CloseButton from '../../buttons/CloseButton'
import NotificationPanel from './NotificationPanel'
import AddPost from './AddPost'
import PointCounter from '../PointCounter'

const HeaderMenuPanel:React.FC<HeaderMenuPanelProps> = ({headerMenuPanelOpen, headerMenuPanelSelectedElement}) => {
    return (
        <div 
            className='headerMenuPanel'
            // style={headerMenuPanelOpen ? {display: 'flex'} : {display: 'none'}}
        >
            {/* <div className="dividerElement"></div> */}
            <PointCounter isHidden={headerMenuPanelSelectedElement !== 'user'}/>
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