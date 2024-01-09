import React from 'react'
import { HeaderMenuProps } from '../../interfaces/headerInterfaces'
import { ScreenProps } from '../../interfaces/interfaces'
import PointCounter from './PointCounter'
import NotificationButton from '../buttons/NotificationButton'
import AddPostButton2 from '../buttons/AddPostButton2'
import ProfileButton from '../buttons/ProfileButton'

const HeaderMenu:React.FC<HeaderMenuProps & ScreenProps> = ({screenFormat}) => {
    return (
        <div className='headerMenu'>
            <AddPostButton2/>
            <NotificationButton/>
            <ProfileButton locationContext='headerMenu'/>
            <PointCounter/>
        </div>
    )
}

export default HeaderMenu