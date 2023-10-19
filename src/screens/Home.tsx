import React, { useState } from 'react'
import Header from '../components/header/Header'
import Feed from '../components/Feed'
import DesktopMenu from '../components/DesktopMenu'

const Home = () => {

    // defining if desktop menu is sticky or not
    const [isSticky, setIsSticky] = useState(false)

    return (
        <div className='home'>
            <Header/>
            {isSticky && <div className="fillTheGap"></div>}
            <DesktopMenu setIsSticky={setIsSticky} isSticky={isSticky}/>
            <Feed/>
        </div>
    )
}

export default Home