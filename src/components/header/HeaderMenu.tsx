import React from 'react'
import { HeaderMenuProps } from '../../interfaces/headerInterfaces'
import { ScreenProps } from '../../interfaces/interfaces'
import PointCounter from './PointCounter'
import NotificationButton from '../buttons/NotificationButton'

const HeaderMenu:React.FC<HeaderMenuProps & ScreenProps> = ({screenFormat}) => {
    return (
        <div className='headerMenu'>
            <NotificationButton/>
            <PointCounter/>
        </div>
    )
}

export default HeaderMenu