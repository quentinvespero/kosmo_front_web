import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import Feed from '../components/Feed'
import TopMenu from '../components/TopMenu'
import AddPostButton from '../components/AddPostButton'
import SearchField from '../components/header/SearchField'
import { ScreenProps } from '../interfaces/interfaces'

const Home: React.FC<ScreenProps> = ({ mobileLayout }) => {

    // defining if top menu is sticky or not
    const [isSticky, setIsSticky] = useState(false)

    return (
        <div className='home'>
            <Header headerScreen='home' mobileLayout={mobileLayout}/>
            {isSticky && <div className="fillTheGap"></div>}
            <TopMenu setIsSticky={setIsSticky} isSticky={isSticky} mobileLayout={mobileLayout} />
            {/* {mobileLayout && <SearchField/>} */}
            <Feed />
            <AddPostButton />
        </div>
    )
}

export default Home