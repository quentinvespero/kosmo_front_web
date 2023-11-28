import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import Feed from '../components/Feed'
import TopMenu from '../components/TopMenu'
import AddPostButton from '../components/AddPostButton'
import SearchField from '../components/header/SearchField'

const Home = () => {

    // defining if top menu is sticky or not
    const [isSticky, setIsSticky] = useState(false)

    // defining if we are in mobile or desktop mode
    const [mobileLayout, setMobileLayout] = useState(false)

    // function to set the value of mobileLayout based on the width of the window. (if the screen is smaller than 700px, then the mobile layout will be true)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 700) {
                setMobileLayout(true)
            }
            else {
                setMobileLayout(false)
            }
        }

        handleResize()
        
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div className='home'>
            <Header />
            {isSticky && <div className="fillTheGap"></div>}
            <TopMenu setIsSticky={setIsSticky} isSticky={isSticky} mobileLayout={mobileLayout} setMobileLayout={setMobileLayout} />
            {mobileLayout && <SearchField/>}
            <Feed />
            <AddPostButton />
        </div>
    )
}

export default Home