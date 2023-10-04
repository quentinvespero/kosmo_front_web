import React from 'react'
import PointCounter from './PointCounter'
import SearchField from './SearchField'

const Header = () => {
    return (
        <div className='header'>
            <SearchField/>
            <PointCounter/>
        </div>
    )
}

export default Header