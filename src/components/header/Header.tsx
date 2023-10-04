import React from 'react'
import PointsCounter from './PointsCounter'
import SearchField from './SearchField'

const Header = () => {
    return (
        <div className='headerElement'>
            <PointsCounter/>
            <SearchField/>
        </div>
    )
}

export default Header