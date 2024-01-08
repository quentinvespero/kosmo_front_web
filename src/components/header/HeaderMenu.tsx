import React from 'react'
import { HeaderMenuProps } from '../../interfaces/headerInterfaces'
import { ScreenProps } from '../../interfaces/interfaces'
import PointCounter from './PointCounter'
import NotificationButton from '../buttons/NotificationButton'
import AddPostButton2 from '../buttons/AddPostButton2'

const HeaderMenu:React.FC<HeaderMenuProps & ScreenProps> = ({screenFormat}) => {
    return (
        <div className='headerMenu'>
            <AddPostButton2/>
            <NotificationButton/>
            <PointCounter/>
        </div>
    )
}

export default HeaderMenu