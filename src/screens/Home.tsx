import React, { useState } from 'react'
import Header from '../components/header/Header'
import Feed from '../components/Feed'
import DesktopMenu from '../components/DesktopMenu'
import AddPostButton from '../components/AddPostButton'

const Home = () => {

    // defining if desktop menu is sticky or not
    const [isSticky, setIsSticky] = useState(false)

    return (
        <div className='home'>
            <Header/>
            {isSticky && <div className="fillTheGap"></div>}
            <DesktopMenu setIsSticky={setIsSticky} isSticky={isSticky}/>
            <Feed/>
            <AddPostButton/>
        </div>
    )
}

export default Home