import React from 'react'
import PointCounter from './PointCounter'
import { HeaderProps } from '../../interfaces/interfaces'
import SearchField from './SearchField'

const Header:React.FC<HeaderProps> = ({ headerScreen, mobileLayout }) => {
    return (
        <div className='header'>
            {headerScreen === 'home' && !mobileLayout && <h1>Home</h1>}
            {headerScreen === 'home' && mobileLayout && <SearchField/>}
            {headerScreen === 'home' && <PointCounter/>}
            {headerScreen === 'entryPage' && <h1 className="entryPage-title">Kosmo Project</h1>}
        </div>
    )
}

export default Header