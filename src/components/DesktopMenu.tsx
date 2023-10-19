import React from 'react'
import SearchField from './header/SearchField'
import FeedSelector from './FeedSelector'

const DesktopMenu = () => {

    return (
        <div className='desktopMenu'>
            <SearchField/>
            <FeedSelector/>
        </div>
    )

}

export default DesktopMenu